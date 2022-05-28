import React, { useState } from 'react'
import { FaGoogle, FaGooglePlusSquare } from 'react-icons/fa'
import { Input } from '../components/Input'
import '../styles/pages/Login.scss'


const Login = () => {
  const [email, setEmail] = useState<any | null>('')
  const [password, setPassword] = useState<any | null>('')


  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <div  className="login">
      <div className="login-form">
          <h1>Login</h1>
            <Input type='text' name='email' placeholder='Enter email' value={email} onChange={handleEmail} style={styles}/>
            <Input type='password' name='password' placeholder='Enter password' value={password} onChange={handlePassword} style={styles}/>
            <button className="btn btn-login">Login</button>
    
      <div className="line">or</div>
      <div className="login-google">
        <FaGooglePlusSquare className="icon-google"/>
        <button className="btn btn-google">Login with Google</button>
        </div>
    </div>
      </div>
  )
}

export default Login


const styles = {
  width: '300px',
  height: '40px',
  borderRadius: '15px',
  border: '1px solid #cccccc22',
  padding: '2px 5px',
  fontSize: '16px',
  marginBottom: '10px',
  textAlign: 'center',
  color: '#333',
  outline: 'none',
  fontWeight: 'bold'
}