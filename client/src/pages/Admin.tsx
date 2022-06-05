import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { Link, Outlet} from 'react-router-dom'
import '../styles/pages/Admin.scss'
const Admin = () => {
  React.useEffect(() => {
    document.title = 'Admin'
  }, [])
  return (
    <>
    
     <div className="admin">

       <Link to="/admin/home">List of Product</Link>
      <Link to="/admin/newproduct">New Product</Link>
      <Link to="/admin/:id/editing">Edit Product</Link>
      <Link to="/admin">
        <FaArrowCircleLeft/>
      </Link>
    </div>

    <Outlet />
    </>
   
  )
}

export default Admin