import React from 'react'

const UserDetails = ({product, index}: any) => {
  return (
    <div className="user-details" key={product._id}>{index + 1}-{product.name}</div>
  )
}

export default UserDetails