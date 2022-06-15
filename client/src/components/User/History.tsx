import React from 'react'
import { useSelector } from 'react-redux'
import { orderHistory } from '../../api/orders'
import { AppState } from '../../types/ProductType'
import '../../styles/components/User/History.scss'

const History = () => {
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

  const dateTime = (time: any) => {
    const date = new Date(time)
    const month = date.getMonth() + 1
    const day = date.getDate()
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    return `${month}/${day}/${year} at ${hours}:${minutes}:${seconds}`
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
          <div key={index} className="each">
          <div className="dateOfEachProd">
            <h2>Date of purchase:

          <span>{dateTime(product.createdAt)}</span>

            </h2>
          </div>
          {
              product.products.map((product: any, index: number) => {
              return (
                  <div key={index} className="product">
                    <div className="product-image">
                      <img src={product.image} alt="product" />
                    </div>
                    <div className="product-info">
                      <h2>{product.name} </h2>
                    </div>
                  </div>
          )
        }
        )
          }
          </div>
      )
    }
    )}
    </div>}
    </div>
  )
}

export default History