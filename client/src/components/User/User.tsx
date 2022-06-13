import React from 'react'
import { getAnUser } from '../../api/admin'

const User = ({user}:any ) => {
  console.log('click');
  const [openDialog, setOpenDialog] = React.useState<boolean>(false)
  const [userId, setUserId] = React.useState<string>('')
  const [bandUser, setBandUser] = React.useState<any>({})
  console.log(bandUser);

  const handleBand = (id:string) => {
    // setUserId(id)
    getAnUser(id).then(res =>setBandUser(res))

    setOpenDialog(!openDialog)
  }
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
    {openDialog &&<UserBanded user={bandUser}/>}
    </div>
  )
}
export default User

const UserBanded = ({user}: any) => {
  const [bandedUser, setBandedUser] = React.useState<any>([])
  console.log('bandedUser', bandedUser);
  
  console.log(user);
  const handler = () => {
    console.log('click');
    setBandedUser([...bandedUser, user])
  }
  return(
    <div className="user_banded">
      
      <button onClick={handler}>Band user</button>
    </div>
  )
}

export const Styles = {
  width: 'fit-content',
  height: '20px',
  borderRadius: '15px',
  border: '1px solid #cccccc22',
  padding: '2px 5px',
  fontSize: '16px',
  marginBottom: '10px',
  textAlign: 'center',
  color: '#333',
  backgroundColor: '#ffffff54',
  outline: 'none',
  fontWeight: 'bold'
}