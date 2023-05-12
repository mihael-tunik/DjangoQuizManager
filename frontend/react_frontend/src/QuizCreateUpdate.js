import React, { Component } from 'react'
import QuizzesService from './QuizzesService'

const quizzesService = new QuizzesService()

class QuizCreateUpdate extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const { match: { params } } = this.props
    console.log(params)

    if (params && params.pk) {
      quizzesService.getQuiz(params.pk).then((c) => {
        this.refs.quiz_name.value = c.quiz_name
        this.refs.description.value = c.description
        this.refs.json_content.value = c.json_content

        // console.log(c)
      })
    }
  }

  handleCreate () {
    quizzesService.createQuiz(
      {
        quiz_name: this.refs.quiz_name.value,
        description: this.refs.description.value,
        json_content: this.refs.json_content.value
      }
    ).then((result) => {
      alert('Quiz created!')
    }).catch(() => {
      alert('There was an error! Please re-check your form.')
    })
  }

  handleUpdate (pk) {
    quizzesService.updateQuiz(
      {
        pk,
        quiz_name: this.refs.quiz_name.value,
        description: this.refs.description.value,
        json_content: this.refs.json_content.value
      }
    ).then((result) => {
      console.log(result)
      alert('Quiz updated!')
    }).catch(() => {
      alert('There was an error! Please re-check your form.')
    })
  }

  handleSubmit (event) {
    const { match: { params } } = this.props

    if (params && params.pk) {
      this.handleUpdate(params.pk)
    } else {
      this.handleCreate()
    }

    event.preventDefault()
  }

  render () {
    return (
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">

              <label className="quiz-form-label">Quiz name:</label>
              <input className="form-control" type="text" ref='quiz_name' />

              <label className="quiz-form-label">Description:</label>
              <textarea className="quiz-form-text-area" ref='description' ></textarea>

              <label className="quiz-form-label">Quiz[JSON]:</label>
              <textarea className="quiz-form-text-area" ref='json_content' ></textarea>

              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
    )
  }
}

export default QuizCreateUpdate
