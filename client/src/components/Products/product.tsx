import React from 'react'
import { Toaster } from 'react-hot-toast'
import { FaTrashAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
// import { FaTrashAlt } from 'react-icons/fa'
import { Link, useLocation} from 'react-router-dom'
import { DeletingProduct } from '../../api/requests'
import { fetchAllProducts } from '../../redux/actions/products.action'
import { AppState } from '../../types/ProductType'
import { handleToast } from '../../util/helpers'
import UserButtons from './UserButtons'
 
const Products = ({product}:any) => {
  const location = useLocation()
  const [adminLocation, setAdminLocation] = React.useState(false)
  const dispatch = useDispatch<any>()
const {user} = useSelector((state: AppState) => state.user)

React.useEffect(() => {
  if (location.pathname === '/admin') {
    setAdminLocation(true)
  }
}, [location])

   const handleDelete = (id: any) => {
    console.log('delete with id: ' + id)
    DeletingProduct(id, user?.email)
    handleToast('Deleting product')
  }

  const handleMessage = () => {
    setTimeout(() => {
          dispatch(fetchAllProducts())
    }, 3500)
  }
    

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
        <div className="" onClick={handleMessage}>
     {adminLocation &&  <button className="btn-delete" onClick={() =>handleDelete(product?._id)}>
        <FaTrashAlt/>
      </button>}
      </div> 
      <Toaster/>
      </div>
      
    </div>
  )
}

export default Products