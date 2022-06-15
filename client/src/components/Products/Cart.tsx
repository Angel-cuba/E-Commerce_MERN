import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/components/Cart.scss'
import { AppState } from '../../types/ProductType';
import { ICartItem } from '../../types/types';

const Cart = () => {
  const [cart, setCart] = React.useState<boolean>(false);
  console.log('cart: ', cart);

 const {inCart} = useSelector((state: AppState) => state.cart);
  console.log('inCart: ', inCart);
  const toggleCart = () => {
    setCart(!cart);
  };

   const amountToPay = (items: ICartItem[]) => items.reduce((sum, item) => sum + item.price * item.amount, 0)
  return (
    <div className="cart">
      <FaCartPlus className="fa-cart" onClick={toggleCart}/>
        {!inCart?.length  ? null : <span className="cart-count">{inCart?.length}</span>}
      <div className="cartSide">
      {cart ? 
      <div className="basket">
      {
        inCart?.map((item: any, index: number) => {
        return (
          <div className="basketItem" key={index}>
            <div className="basketItemImg">
              <img src={item.image} alt=""/>
            </div>
            <div className="basketItemInfo">
              <div className="basketItemInfoName">{item.name.split(' ')[0]}</div>
              <span>{item.amount}</span>
              <div className="basketItemInfoPrice">{(item.price * item.amount).toFixed(2)} €</div>
            </div>
          </div>
        )
      } )
      }
      {inCart?.length ? <span className="total">Total: {inCart && amountToPay(inCart).toFixed(2)}</span>: null}
    
  {inCart?.length ? <Link style={{ position: 'absolute', bottom: '-64px', right: '-48px', backgroundColor: '#001a4f', color: '#e2e2e2e8', minWidth: '100px', padding:'.53rem .87rem', borderRadius: '6px', textDecoration:'none', margin:'3rem 1rem ', fontWeight: 'bold', textTransform: 'uppercase'}} to="/payment">Go to pay</Link>: null}
    </div> 
    : null}
    
        
      </div>
  
    </div>
  )
}

export default Cart



