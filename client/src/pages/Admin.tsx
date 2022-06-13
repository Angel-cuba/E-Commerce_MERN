import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
import ProductForm from '../components/Admin/ProductForm'
import Navbar from '../components/Navbar'
import ProductsView from '../components/Products/productsView'
import Users from '../components/User/Users'
import '../styles/pages/Admin.scss'


const Admin = () => {
  const [openNewProduct, setOpenNewProduct] = React.useState(false)
  const [openProducts, setOpenProducts] = React.useState(false)
  const [openUsers, setOpenUsers] = React.useState(false)
  console.log('openProducts', openProducts)
  console.log('openUsers', openUsers);

  
  React.useEffect(() => {
    document.title = 'Admin'
    if(!localStorage.getItem('token')){
      window.location.href = '/'
    }
  }, [])



const handleNewProduct = () => {
    setOpenProducts(false)
    setOpenUsers(false)
  
  setOpenNewProduct(!openNewProduct)
}

const handleOpenProducts = () => {
    setOpenNewProduct(false)
    setOpenUsers(false)

  setOpenProducts(!openProducts)
}

const handleClose = () => {
  setOpenNewProduct(false)
  setOpenProducts(false)
  setOpenUsers(false)
}

const handleFetchUsers = () => {
    setOpenNewProduct(false)
    setOpenProducts(false)
  setOpenUsers(!openUsers)
}

  return (
  <>
     <div className={(!openProducts && !openNewProduct && !openUsers) ? 'admin-empty' : 'admin'}> 
       <Navbar />

       <div className="admin_links">
         <button className="btn"onClick={handleNewProduct}>New Product</button>
          <button className="btn"onClick={handleOpenProducts}>Products</button>
        <button className="btn"onClick={handleFetchUsers}>Users</button>
       
     <div className="btnClose">
            {(openNewProduct || openProducts || openUsers) &&
        <FaWindowClose className="close" onClick={handleClose}/>
          }
     
     </div>
    </div>
       </div>
         {openNewProduct && <ProductForm/>}
        {openProducts && <ProductsView />}
       {openUsers && <Users/>}
    </>  
     
  )
}

export default Admin