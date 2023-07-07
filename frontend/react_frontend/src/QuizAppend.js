import React, { Component, useRef} from 'react'
import { useParams } from 'react-router-dom'
import QuizzesService from './QuizzesService'

const quizzesService = new QuizzesService()

export default function QuizAppend(){

    const lValue = useRef(null);
    const rValue = useRef(null);
      
    function handleUpdate (pk) {
      
      if(lValue && rValue){
      
        quizzesService.getQuiz(pk).then((c) => {
          
          const updated_json_content = JSON.parse(c.json_content)
      
          //console.log(updated_json_content)
          updated_json_content[lValue.current.value] = rValue.current.value
          
          //console.log(updated_json_content)
      
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
  
    }
  
    function handleSubmit (event) {
      const { pk } = useParams()
  
      if (pk) {
        handleUpdate(pk)
      }
      event.preventDefault()
    }

    return (
      <form onSubmit={handleSubmit}>
      
      <div className="form-group">
          <label className="quiz-form-label">Add:</label>
          
          <input className="quiz-form-new-data" type="text" ref={lValue} />
          <input className="quiz-form-new-data" type="text" ref={rValue} />
          
          <input className="btn btn-primary" type="submit" value="Append" />
             
      </div>
                  
      </form>
    )
}
