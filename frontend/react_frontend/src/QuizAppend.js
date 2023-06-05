import React, { Component } from 'react'
import QuizzesService from './QuizzesService'

const quizzesService = new QuizzesService()

class QuizAppend extends Component {
  constructor (props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount () {
    const { match: { params } } = this.props
    console.log(params)
  }

  handleUpdate (pk) {
        
    quizzesService.getQuiz(pk).then((c) => {
        
        const updated_json_content = JSON.parse(c.json_content)
    
        console.log(updated_json_content)
        updated_json_content[this.refs.l_value.value] = this.refs.r_value.value
        console.log(updated_json_content)
    
        quizzesService.updateQuiz(
        {
          pk,
          quiz_name: c.quiz_name,
          description: c.description,
          json_content: JSON.stringify(updated_json_content)
         }
        ).then((result) => {
          console.log(result)
          alert('Quiz updated!')
        }).catch(() => {
          alert('There was an error! Please re-check your form.')
        })
    })

  }

  handleSubmit (event) {
    const { match: { params } } = this.props

    if (params && params.pk) {
      this.handleUpdate(params.pk)
    }
    event.preventDefault()
  }

  render () {
    return (
          <form onSubmit={this.handleSubmit}>
          
          <div className="form-group">
              <label className="quiz-form-label">Add:</label>
              
              <input className="quiz-form-new-data" type="text" ref='l_value' />
              <input className="quiz-form-new-data" type="text" ref='r_value' />
              
              <input className="btn btn-primary" type="submit" value="Append" />
                 
          </div>
                      
          </form>
    )
  }
}

export default QuizAppend
