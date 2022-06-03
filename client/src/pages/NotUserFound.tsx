import React from 'react'
import '../styles/pages/NotUserFound.scss'

const NotUserFound = ({ setCheckUser}: any) => {
  const user = localStorage.getItem('user')
  React.useEffect(() => {
    document.title = 'Not User Found'
    if(user){
      setCheckUser(true)
    }

  }, [user, setCheckUser])
  return (
    <div className='notUser'>NotUserFound</div>
  )
}

export default NotUserFound