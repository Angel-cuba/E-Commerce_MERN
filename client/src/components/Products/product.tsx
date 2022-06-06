import React from 'react'
// import { FaTrashAlt } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import UserButtons from './UserButtons'

const Products = ({product}:any) => {
  const location = useLocation()
  const [adminLocation, setLocation] = React.useState(false)

React.useEffect(() => {
  if (location.pathname === '/admin/home') {
    setLocation(true)
  }
}, [location])

  return (
    <div className="single_product"  >
      <div className="image">
        <img src="https://res.cloudinary.com/dqaerysgb/image/upload/v1648218398/istockphoto-1132926013-612x612_t1xwec.jpg" alt={product.name}/>
      </div>
      <div className="info">
        <span>Category: {product.category}</span>
     <div className="info_small">
       <div className="left">
        <small>Name</small>
        <p>{product.name}</p>
     </div>
      <div className="right">
        <small>Price</small>
        <p>{product.price}</p>
     </div>
      <div className="right">
        <small>Rating</small>
        <p>4.5</p>
     </div>
     </div>
     <div className="buttons">

      {!adminLocation ? <UserButtons/> :
     <Link to={`/admin/${product._id}/editing`}>
      <button className="btn btn-edit">
         Edit
        </button>
        </Link>
}
       <Link to={`/products/${product._id}`}>
        <button className="btn btn-details">Details</button>
      </Link>
 
     </div>
      
      </div>
      
    </div>
  )
}

export default Products