import axios from "axios"
import { signIn } from "../redux/actions/user.actions"


//Login with google
 export const handleGoogleResponse = async (response: any, dispatch: any, navigate: any) => {
   console.log('response from google: ', response)
    const idToken = response.credential
    
  const res = await  axios.post('http://localhost:3001/users/signin-google', 
    {},
    { 
      headers: {
        Authorization: `Bearer ${idToken}`
      }
    })
    localStorage.setItem('token', res.data.token) //save token to local storage

    dispatch(signIn())
    navigate('/')
  }