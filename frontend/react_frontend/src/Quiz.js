import React, { Component } from 'react'
import { v4 as uuidV4 } from 'uuid'

import QuizzesService from './QuizzesService'

const quizzesService = new QuizzesService()

function sample (n, m) {
  const res = []

  while (res.length < m) {
    const candidate = Math.floor(Math.random() * n)
    let flag = 1

    for (let j = 0; j < res.length; ++j) {
      if (res[j] === candidate) {
        flag = 0
      }
    }

    if (flag === 1) {
      res.push(candidate)
    }
  }
  return res
}

function ProcessQuizData (result) {
  const questions = []

  const alphabet = []
  const transcript = []
  const questionNumber = 15

  for (const key in result) {
    console.log('Read: ' + key + ':' + result[key])

    alphabet.push(key)
    transcript.push(result[key])
  }

  const length = alphabet.length
  const variants = 4

  for (let question_idx = 0; question_idx < questionNumber; ++question_idx) {
    const random_idx = sample(length, variants)
    const shuffle = sample(variants, variants)

    // this code is good enough
    const answers = [
      { answerText: transcript[random_idx[0]], isCorrect: true, key: uuidV4() },
      { answerText: transcript[random_idx[1]], isCorrect: false, key: uuidV4() },
      { answerText: transcript[random_idx[2]], isCorrect: false, key: uuidV4() },
      { answerText: transcript[random_idx[3]], isCorrect: false, key: uuidV4() }
    ]
    //

    const answers_shuffled = []

    for (let j = 0; j < shuffle.length; ++j) {
      answers_shuffled.push(answers[shuffle[j]])
    }

    const quiz_item = {
      questionText: alphabet[random_idx[0]],
      answerOptions: answers_shuffled
    }

    questions.push(quiz_item)
  }

  return questions
}

class Quiz extends Component {
  constructor (props) {
    super(props)

    this.state = {
      questions: [],
      qid: 0,
      chosen: false,
      is_correct: false,
      right_ans_cnt: 0,
      show_stats: false
    }

    this.handleAnswerOptionClick = this.handleAnswerOptionClick.bind(this)
    this.handleNextClick = this.handleNextClick.bind(this)
  }

  componentDidMount () {
    const { match: { params } } = this.props

    if (params && params.pk) {
      quizzesService.getQuiz(params.pk).then((result) => {
        result = JSON.parse(result.json_content)
        const loaded_questions = ProcessQuizData(result)

        console.log(loaded_questions)

        this.setState({ questions: loaded_questions })
      })
    }
  }

  handleAnswerOptionClick (isCorrect) {
    const current_qid = this.state.qid
    const current_questions = this.state.questions

    this.setState({ chosen: true, is_correct: isCorrect })
  };

  handleNextClick () {
    const current_qid = this.state.qid
    const current_questions = this.state.questions
    const current_rcnt = this.state.right_ans_cnt

    if (current_qid < current_questions.length - 1) {
	    if (this.state.is_correct) {
	        this.setState({ right_ans_cnt: current_rcnt + 1 })
	    }
	    this.setState({ chosen: false, qid: current_qid + 1 })
    } else {
	    this.setState({ show_stats: true })
    }
  };

  handleRestartClick () {
    this.setState({ chosen: false, qid: 0, is_correct: false, right_ans_cnt: 0, show_stats: false })
  };

  chooseColor (chosen, correct) {
    if (chosen && correct) {
      return 'green'
    }
    return 'white'
  }

  manageControls (chosen) {
    if (chosen) {
      return 'visible'
    }
    return 'hidden'
  }

  render () {
    const q = this.state.questions[this.state.qid]

    return (
        <div>
        {this.state.questions.length > 0
          ? (

        <div className="quiz-container">
            {(this.state.show_stats === false)
              ? (

            <div id="question-container" className="hide">
                <div className="answer-counter">Question: {this.state.qid + 1}/{this.state.questions.length}</div>
                <div className="question">{q.questionText}</div>
                <div className="answer-buttons">
                    {q.answerOptions.map(opt =>
                            <button key = {opt.key} className="quiz-btn"
                                    onClick={() => this.handleAnswerOptionClick(opt.isCorrect)}
                                    style={{ backgroundColor: this.chooseColor(this.state.chosen, opt.isCorrect) }}>
                                {opt.answerText}
                            </button>)
                    }
                </div>

                <div className="controls">
                    <button id="next-btn" className="quiz-btn"
                    onClick={() => this.handleNextClick()}
                    style={{ visibility: this.manageControls(this.state.chosen) }}>
                    Next</button>
                </div>

            </div>
                )
              : (
                <div className="stats-container">
                     <div className="result-stats">Your result: {this.state.right_ans_cnt}/{this.state.questions.length}</div>

                     <button id="restart-btn" className="quiz-btn"
                     onClick={() => this.handleRestartClick()}>
                     Restart</button>
                </div>
                )}

        </div>)
          : (<div>Loading...</div>)}
        </div>
    )
  }
}
export default Quiz
