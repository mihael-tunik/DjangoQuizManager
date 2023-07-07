import React, { Component, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import QuizzesService from './QuizzesService'

const quizzesService = new QuizzesService()

export default function QuizCreateUpdate(){
    const QuizName = useRef(null);
    const Description = useRef(null);
    const JsonContent = useRef(null);

    const { pk } = useParams()
      
    useEffect(() => {
         
      if (pk) {
        
        quizzesService.getQuiz(pk).then((c) => {
          QuizName.current.value = c.quiz_name
          Description.current.value = c.description
          JsonContent.current.value = c.json_content
        })
    
      }
    }, []);  
    
    function handleCreate () {
      quizzesService.createQuiz(
        {
          quiz_name: QuizName.current.value, 
          description: Description.current.value,
          json_content: JsonContent.current.value
        }
      ).then((result) => {
        alert('Quiz created!')
      }).catch(() => {
        alert('There was an error! Please re-check your form.')
      })
    }
  
    function handleUpdate (pk) {
      quizzesService.updateQuiz(
        {
          pk,
          quiz_name: QuizName.current.value, 
          description: Description.current.value,
          json_content: JsonContent.current.value
        }
      ).then((result) => {
        console.log(result)
        alert('Quiz updated!')
      }).catch(() => {
        alert('There was an error! Please re-check your form.')
      })
    }
  
    function handleSubmit (event) {  
      if (pk) {
        handleUpdate(pk)
      } else {
        handleCreate()
      }
  
      event.preventDefault()
    }

    return (
      <form onSubmit={handleSubmit}>
      <div className="form-group">

          <label className="quiz-form-label">Quiz name:</label>
          <textarea className="quiz-form-text-area" ref={QuizName} />

          <label className="quiz-form-label">Description:</label>
          <textarea className="quiz-form-text-area" ref={Description} ></textarea>

          <label className="quiz-form-label">Quiz[JSON]:</label>
          <textarea className="quiz-form-text-area" ref={JsonContent} ></textarea>
          
          <input className="btn btn-primary" type="submit" value="Submit" />
                       
        </div>
                  
      </form>
    )

}
