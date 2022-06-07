import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserHistory = () => {
  const navigate = useNavigate()
  return (
    <div style={{position: 'absolute', width: '100px', height: '100px', backgroundColor: 'red', top: '50px', left: '20px', transition: 'all 1s'}}>History

      <button onClick={() => navigate('/home')}>back</button>
    </div>
  )
}

export default UserHistory