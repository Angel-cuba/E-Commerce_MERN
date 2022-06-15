import React from 'react'
import { FaCartPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
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
    <div className="cart">
      <FaCartPlus className="fa-cart" onClick={toggleCart}/>
        {!inCart?.length  ? null : <span className="cart-count">{inCart?.length}</span>}
      {/* </FaCartPlus> */}
      <div className="cartSide">
        <h3>{inCart?.length === 0 ? 'No cart' : null}</h3>
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
              <span>{item.amount && item.amount}</span>
              <div className="basketItemInfoPrice">{(item.price * item.amount).toFixed(2)} €</div>
            </div>
          </div>
        )
      } )
      }
      {inCart?.length && <span className="total">Total: {inCart && calculateCart(inCart).toFixed(2)}</span>}
    
  {inCart?.length && <Link style={{ position: 'absolute', bottom: '-64px', right: '-48px', backgroundColor: '#001a4f', color: '#e2e2e2e8', minWidth: '100px', padding:'.53rem .87rem', borderRadius: '6px', textDecoration:'none', margin:'3rem 1rem ', fontWeight: 'bold', textTransform: 'uppercase'}} to="/payment">Go to pay</Link>}
    </div> 
    : null}
    
        
      </div>
  
    </div>
  )
}

export default Cart


// const Basket = ({inCart}: any) => {

//   const calculateCart = (item: any) => {
//     // let total = 0;
//     // item.forEach((i: any) => {
//     //   total += i.price;
//     // }
//     // )
//     // console.log('total: ', total);
//     // return total;
//     return item.reduce((total: any, i: any) => {
//       return total + i.price;
//     }
//     , 0)
//   }
//   return (
//     <div className="basket">
//       {
//         inCart.map((item: any, index: number) => {
//         return (
//           <div className="basketItem" key={index}>
//             <div className="basketItemImg">
//               <img src={item.image} alt=""/>
//             </div>
//             <div className="basketItemInfo">
//               <div className="basketItemInfoName">{item.name.split(' ')[0]}</div>
//               <span>{item.amount && item.amount}</span>
//               <div className="basketItemInfoPrice">{(item.price * item.amount).toFixed(2)} €</div>
//             </div>
//           </div>
//         )
//       } )
//       }
//       <span className="total">Total: {calculateCart(inCart)}</span>
//       <Link to="/payment">Payment</Link>

//     </div>
//   )
// }