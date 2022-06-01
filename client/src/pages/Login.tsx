import React, { useState } from 'react'
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google'
import axios from 'axios'
import '../styles/pages/Login.scss'



const Login = () => {
  const [token, setToken] = useState('')

  const handleGoogleResponse = async (response: any) => {
    const idToken = response.credential

  const res = await  axios.post('http://localhost:3001/users/signin-google', 
    {},
    { 
      headers: {
        Authorization: `Bearer ${idToken}`
      }
    })
    localStorage.setItem('token', res.data.token)
    console.log(res.data.token)
    setToken(res.data.token);
  }

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID

  return (
    <div  className="login">
      <div className="login-form">
          <h1>Login</h1>
          <GoogleOAuthProvider clientId={`${clientId}`}> 
            <GoogleLogin
              onSuccess={handleGoogleResponse}
            />
          </GoogleOAuthProvider>
      </div>
    </div>
  )
}

export default Login

