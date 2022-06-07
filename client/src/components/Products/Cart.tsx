import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import '../../styles/components/Cart.scss'

const Cart = () => {
  const [cart, setCart] = React.useState<boolean>(false);
  console.log('cart: ', cart);
  const toggleCart = () => {
    setCart(!cart);
  };
  return (
    <div className="cart">
      <FaCartPlus className="fa-cart" onClick={toggleCart}/>
      <div className="cartSide">
      {cart && <Basket />}

      </div>
    </div>
  )
}

export default Cart


const Basket = () => {
  return (
    <div className="basket">
      <h1>Basket</h1>
    </div>
  )
}