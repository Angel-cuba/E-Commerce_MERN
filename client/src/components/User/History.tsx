import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { orderHistory } from '../../api/orders'
import { AppState } from '../../types/ProductType'

const UserHistory = () => {
  const navigate = useNavigate()
 const {user} = useSelector((state: AppState) =>state.user)
 React.useEffect(() => {
  console.log('from history')
  if(user){
    orderHistory(user.id)
  }
 }, [user])
  return (
    <div style={{position: 'absolute', width: '100px', height: '100px', backgroundColor: 'red', top: '50px', left: '20px', transition: 'all 1s'}}>History

      <button onClick={() => navigate('/home')}>back</button>
    </div>
  )
}

export default UserHistory