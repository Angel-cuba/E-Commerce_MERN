import React from 'react'
import { useSelector } from 'react-redux'
import { getAllHistory } from '../../api/admin'
import { AppState } from '../../types/ProductType'
import Navbar from '../Navbar'
import '../../styles/components/User/UsersHistory.scss'

const UsersHistory = () => {
  const  {user} = useSelector((state: AppState) => state.user)
  const [fetchHistory, setFetchHistory] = React.useState<any>()
  console.log('the history of all users', fetchHistory)

  React.useEffect(() => {
    getAllHistory(user?.email).then(res => setFetchHistory(res))
  }, [user])


  return (
    
    <div className="users">
    <Navbar />

        <div className="user_content">
          {fetchHistory && fetchHistory.map((product: any, index: number) => {
            return (
              <>
               <div key={index} className="user">
                <div className="user-image">
                   <img src={product.user.picture} alt="user" />
                  </div>
               <div className="user-info">
                 <h1>{product.user.name} { product.user.lastname} </h1>
               </div>
               </div>
               {/* <div className="email">
                  <h2>{product.user.email}</h2>
                  <span>{product.user.role}</span>
               </div> */}
              </>
             
            )
          }
          )}
        </div>
        </div>
    
  )
}

export default UsersHistory