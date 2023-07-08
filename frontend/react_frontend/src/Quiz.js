import React, { Component, useReducer, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import ProcessQuizData from './ProcessQuizData'
import QuizzesService from './QuizzesService'

const quizzesService = new QuizzesService()

function chooseColor (chosen, correct) {
    if (chosen && correct) {
      return 'green'
    }
    return 'white'
}

function manageControls (chosen) {
    if (chosen) {
      return 'visible'
    }
    return 'hidden'
}

        
export default function Quiz() {
    
    const init_state = {
      questions: [],
      qid: 0,
      chosen: false,
      is_correct: false,
      right_ans_cnt: 0,
      show_stats: false
    }

    const { pk } = useParams()
    
    const [qstate, setQState] = useReducer(
        (state, updates) => ({...state, ...updates}),
        init_state
    );
    
    useEffect(() => {
         
      if (pk) {
        quizzesService.getQuiz(pk).then((result) => {
          result = JSON.parse(result.json_content)
          
          console.log(result)          
          const loaded_questions = ProcessQuizData(result)
          console.log(loaded_questions)
          
          setQState({questions: loaded_questions})
          
        })
      }
    
    }, []);  

    function handleNextClick () {
      const current_qid = qstate.qid
      const current_questions = qstate.questions
      const current_rcnt = qstate.right_ans_cnt
      const current_correct = qstate.is_correct
      
      if (current_qid < current_questions.length - 1) {
	    if (current_correct) {
	        setQState({right_ans_cnt: current_rcnt + 1})
	    }
	    setQState({chosen: false, qid: current_qid + 1})
      } else {
            setQState({show_stats: true})
      }
    }
  
    function handleAnswerOptionClick (isCorrect) {
      const current_qid = qstate.qid
      const current_questions = qstate.questions
      
      setQState({chosen: true, is_correct: isCorrect})
    }

    function handleRestartClick () {
      setQState({chosen: false, qid: 0, is_correct: false, right_ans_cnt: 0, show_stats: false})    
    }

    const current_qid = qstate.qid
    const q = qstate.questions[current_qid]
    const qlength = qstate.questions.length
     
    return (
        <div>
        {qlength > 0
          ? (

        <div className="quiz-container">
            {(qstate.show_stats === false)
              ? (

            <div id="question-container" className="hide">
                <div className="answer-counter">Question: {current_qid + 1}/{qstate.questions.length}</div>
                <div className="question">{q.questionText}</div>
                <div className="answer-buttons">
                    {q.answerOptions.map(opt =>
                            <button key = {opt.key} className="quiz-btn"
                                    onClick={() => handleAnswerOptionClick(opt.isCorrect)}
                                    style={{ backgroundColor: chooseColor(qstate.chosen, opt.isCorrect) }}>
                                {opt.answerText}
                            </button>)
                    }
                </div>

                <div className="controls">
                    <button id="next-btn" className="quiz-btn"
                    onClick={() => handleNextClick()}
                    style={{ visibility: manageControls(qstate.chosen) }}>
                    Next</button>
                </div>

            </div>
                )
              : (
                <div className="stats-container">
                     <div className="result-stats">Your result: {qstate.right_ans_cnt}/{qlength}</div>

                     <button id="restart-btn" className="quiz-btn"
                     onClick={() => handleRestartClick()}>
                     Restart</button>
                </div>
                )}

        </div>)
          : (<div>Loading...</div>)}
        </div>
    )
}

