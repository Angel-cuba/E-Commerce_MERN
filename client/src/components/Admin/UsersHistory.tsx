import React from 'react'
import { useSelector } from 'react-redux'
import { getAllHistory } from '../../api/admin'
import { AppState } from '../../types/ProductType'
import Navbar from '../Navbar'

const UsersHistory = () => {
  const  {user} = useSelector((state: AppState) => state.user)
  const [fetchHistory, setFetchHistory] = React.useState<any>()
  console.log('the history state', fetchHistory)

  React.useEffect(() => {
    getAllHistory(user?.email).then(res => setFetchHistory(res))
  }, [user])


  return (
    <>
    <Navbar />

    </>
  )
}

export default UsersHistory