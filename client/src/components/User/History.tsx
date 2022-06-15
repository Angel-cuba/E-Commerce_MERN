import React from 'react'
import { useSelector } from 'react-redux'
import { orderHistory } from '../../api/orders'
import { AppState } from '../../types/ProductType'
import '../../styles/components/User/History.scss'

// {history}: any
const UserHistory = () => {
  const [open, setOpen] = React.useState<boolean>(false)
 const {user} = useSelector((state: AppState) =>state.user)
 const [history, setHistory] = React.useState<any>()
 console.log('the history state', history)
 React.useEffect(() => {
  console.log('from history')
  if(user){
    orderHistory(user.id).then(res => {
      setHistory(res)
    })
  }
 }, [user])

   const handle = () => {
    setOpen(!open)
  }
  return (
    <div className={open ? "history": "history_show"}>
    <div className="content">
      <div className="content-header">
        <h1>History</h1>
      
        </div>
        <button className="btn"onClick={handle}>{open ? 'Hide' : 'Show'}</button>

    </div>
    {open && <div className="content-body">
        {history && history.map((product: any, index: number) => {
          return (
          <>
          <h1>Each product{product.createdAt}</h1>
          {
              product.products.map((product: any, index: number) => {
              return (
                <h1 key={index}>{product._id}</h1>
          )
        }
        )
          }
          </>
      )
    }
    )}
    </div>}
    </div>
  )
}

export default UserHistory