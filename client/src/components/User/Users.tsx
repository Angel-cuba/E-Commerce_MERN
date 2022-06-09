import React from 'react'
import { useSelector } from 'react-redux'
import { getAllUsers } from '../../api/admin'
import '../../styles/components/User/Users.scss'
import { AppState } from '../../types/ProductType'
import { IUser } from '../../types/types'
import Loading from '../Loading'
import User from './User'

const Users = () => {
  const [users, setUsers] = React.useState<IUser[] | any>([])
  const  {user} = useSelector((state: AppState) => state.user)

  React.useEffect(() => {
    getAllUsers(user?.email).then(res => setUsers(res.data))
  }, [user])


if(!user){
  return <Loading />
}

  return (
    <div className='users'>
    {!users ? <Loading /> :  users?.map((user : IUser, index: number) => <User key={index} user={user}/>)}
    </div>
  )
}

export default Users