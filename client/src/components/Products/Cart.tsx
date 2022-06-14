import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import '../../styles/components/Cart.scss'
import { AppState } from '../../types/ProductType';

const Cart = () => {
  const [cart, setCart] = React.useState<boolean>(false);
  console.log('cart: ', cart);

  useSelector((state: AppState) => console.log('state from cart: ', state));
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