import React from 'react'

const User = ({user}:any ) => {
  const handleBand = (id:string) => {
    console.log('id', id);
    console.log('band', user);
  }
  console.log('user', user);
  return (
    <div className="each_user">
    <div className="img">
      <img src={user.picture} alt=""/>

    </div>
    <div className="full_name">
      <h2>{user.name} {user.lastname}</h2>
    </div>
    <div className="content">
      <div className="details">
        <p>{user.email}</p>
      <button className="btn" onClick={()=>handleBand(user._id)}>Band {!user.band ? ' 🚀' : 'Disabled'}</button>
      </div>
    </div>
    </div>
  )
}

export default User