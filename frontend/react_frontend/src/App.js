import React, { Component, useContext } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'
import AuthContext from './context/AuthContext'

import PrivateRoute from './utils/PrivateRoute'

import LoginPage from './pages/LoginPage'

import QuizzesList from './QuizzesList'
import QuizCreateUpdate from './QuizCreateUpdate'
import QuizAppend from './QuizAppend'
import Quiz from './Quiz'

import './App.css'
import logo from './images/logo.png'

const BaseLayout = () => {

    let { user, logoutUser } = useContext(AuthContext)
        
    return (
    
    <div className="container-fluid">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="quiz-logo"><img src={logo} width="70" height="70"/></div>
        
        <a className="navbar-brand" href="#">QuizManager</a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <a className="nav-item nav-link" href="/">QUIZZES</a>
                <a className="nav-item nav-link" href="/quiz">CREATE QUIZ</a>
                
                {user ? (
                <span onClick={logoutUser}>LOGOUT</span>
                ) : (
                <Link to="/login" >LOGIN</Link>
                )}
            </div>
        </div>

        </nav>

    <div className="content">         
        <Routes>
          <Route path="/" element={<PrivateRoute><QuizzesList/></PrivateRoute>} />
          <Route path="/quiz/:pk" element={<PrivateRoute><QuizCreateUpdate/></PrivateRoute>} />
          <Route path="/quiz/" element={<PrivateRoute><QuizCreateUpdate/></PrivateRoute>} />
          <Route path="/quiz_append/:pk" element={<PrivateRoute><QuizAppend/></PrivateRoute>} />
          
          <Route path="/play/:pk" element={<PrivateRoute><Quiz/></PrivateRoute>} />
          
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
    </div>

    </div>
  )
}

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <AuthProvider>
          <BaseLayout/>
        </AuthProvider>
      </BrowserRouter>
    )
  }
}

export default App
