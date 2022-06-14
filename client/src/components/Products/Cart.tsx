import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import '../../styles/components/Cart.scss'
import { AppState } from '../../types/ProductType';

const Cart = () => {
  const [cart, setCart] = React.useState<boolean>(false);
  console.log('cart: ', cart);

 const {inCart} = useSelector((state: AppState) => state.cart);
  console.log('inCart: ', inCart);
  const toggleCart = () => {
    setCart(!cart);
  };
  return (
    <div className="cart">
      <FaCartPlus className="fa-cart" onClick={toggleCart}/>
      <div className="cartSide">
      {cart && <Basket inCart={inCart}/>}

      </div>
    </div>
  )
}

export default Cart


const Basket = ({inCart}: any) => {

  const calculateCart = (item: any) => {
    // let total = 0;
    // item.forEach((i: any) => {
    //   total += i.price;
    // }
    // )
    // console.log('total: ', total);
    // return total;
    return item.reduce((total: any, i: any) => {
      return total + i.price;
    }
    , 0)
  }
  return (
    <div className="basket">
      {inCart.map((item: any) => {
        return (
          <div className="basketItem" key={item.id}>
            <div className="basketItemImg">
              <img src={item.image} alt=""/>
            </div>
            <div className="basketItemInfo">
              <div className="basketItemInfoName">{item.name.split(' ')[0]}</div>
              <span>{item.amount && item.amount}</span>
              <div className="basketItemInfoPrice">{(item.price * item.amount).toFixed(2)} €</div>
            </div>
          </div>
        )
      } )}
            <span className="total">Total: {calculateCart(inCart)}</span>

    </div>
  )
}