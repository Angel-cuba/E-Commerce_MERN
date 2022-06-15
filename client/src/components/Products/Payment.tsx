import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sendOrder } from '../../api/orders';
import '../../styles/components/Products/Payments.scss'
import { AppState } from '../../types/ProductType';
import { ICartItem } from '../../types/types';

const Payment = () => {
  const [pay, setPay] = React.useState()
  console.log('body to backend: ', pay);

  const {inCart} = useSelector((state: AppState) => state.cart)
  const {user} =useSelector((state: AppState) => state.user)

React.useEffect(() => {
  document.title = 'Payment';
  fetchCart();
}, []);


 //Calculate total price of cart
 //TODO: Check the first element in the cart
  const amountToPay = (items: ICartItem[]) => items.reduce((sum, item) => sum + item.price * item.amount, 0)
//Sending products to customer history
const sendPayment = () => {
  sendOrder(pay)
}

const fetchCart = () => {
  let arraysOfIds = inCart?.map((item: ICartItem) => item._id)
 
  setPay({user: user?.id, products: arraysOfIds}as any)
}


  return (
    <div className="container">
      <Link  style={{backgroundColor: '#001a4f', color: '#e2e2e2e8', padding:'.53rem .87rem', borderRadius: '6px', textDecoration:'none', margin:'3rem 1rem ', fontWeight: 'bold', textTransform: 'uppercase', cursor: 'pointer'}} to="/">Back to Home</Link>

    <div className="view">
        <div className="payment_data">
        {inCart?.length === 0 ? 'Go to buy some products' : inCart?.map((item: any, index: number) => 
        <div className="payment_item" key={index}>
          <div className="payment_item_img">
            <img src={item.image} alt=""/>
          </div>
          <p className="payment_item_name">{item.name}</p>
          <p style={{color: 'gray'}}>{item.price}</p>
          <p className="payment_item_price">{item.amount * item.price} €</p>

        
        </div>)}  
        </div>
        <div className="user_data">
          <input type="text"  placeholder="Name"/><input type="text" placeholder="Address"/><input type="text"  placeholder="City"/><input type="text" placeholder="State"/><input type="text" placeholder="Country" />
          <div className="buttons">
            <button className="btn-payment" onClick={sendPayment}>Pay</button>
            <button className="btn-payment">Cancel</button>
          </div>
          <span>Total: {!inCart ? null :  amountToPay(inCart)}</span>
        </div>
    </div>
    </div>
  )
}

export default Payment