import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addingToCart, removeFromCart } from '../../redux/actions/cart.actions'

const UserButtons = ({product}: any) => {
const dispatch = useDispatch<any>()

// React.useEffect(() => {
//   console.log('clicked')

// }, [id])

  const addToCart = () => {
    // fetchProductById(id)
     dispatch(addingToCart(product))
    console.log('adding to cart', product)
  }

  const removingFromCart = () => {
    console.log('Removed from cart', product)
    dispatch(removeFromCart(product))
  }

  return (
    <div className="btn-add">
      
      <FaPlus className='fa-plus' onClick={addToCart}/>
      <FaMinus className="fa-minus" onClick={() => removingFromCart()}/>
    </div>
  )
}

export default UserButtons