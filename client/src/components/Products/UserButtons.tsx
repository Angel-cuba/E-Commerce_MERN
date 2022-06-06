import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const UserButtons = () => {
  const addingToCart = () => {
    console.log('Added to cart')
  }

  const removingFromCart = () => {
    console.log('Removed from cart')
  }

  return (
    <div className="btn-add">
      
      <FaPlus className='fa-plus' onClick={() => addingToCart()}/>
      <FaMinus className="fa-minus" onClick={() => removingFromCart()}/>
    </div>
  )
}

export default UserButtons