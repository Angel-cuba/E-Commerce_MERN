import React from 'react'
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google'
import '../styles/pages/Login.scss'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { handleGoogleResponse } from '../api/signInWithGoogle'


const Login = () => {
  const dispatch = useDispatch<any>()
  const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID
  const navigate = useNavigate()

React.useEffect(() => {
    document.title = 'Login'
  }, [])


  return (
    <div  className="login">
      <div className="login-form">
          <h1>Login</h1>
          <GoogleOAuthProvider clientId={`${clientId}`}> 
            <GoogleLogin
              onSuccess={(response) =>handleGoogleResponse(response,dispatch, navigate)}
            />
          </GoogleOAuthProvider>
      </div>
    </div>
  )
}

export default Login

