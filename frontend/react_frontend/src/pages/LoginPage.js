import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const LoginPage = () => {

    let {loginUser} = useContext(AuthContext)

    return (
        <div className="login-container">
            <form onSubmit={loginUser}>
                <span>Username: </span>
                <input className="login-input" type="text" name="username" placeholder="Enter username"/>
                <span>Password: </span>
                <input className="login-input" type="password" name="password" placeholder="Enter password"/>
                <input className="login-input" type="submit" value="Login"/>
            </form>
        </div>
    )
}

export default LoginPage
