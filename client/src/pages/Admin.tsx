import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { getAllUsers } from '../api/admin'
import ProductForm from '../components/Admin/ProductForm'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import ProductsView from '../components/Products/productsView'
import Users from '../components/User/Users'
import '../styles/pages/Admin.scss'
import { AppState } from '../types/ProductType'


const Admin = () => {
  const [openNewProduct, setOpenNewProduct] = React.useState(false)
  const [openProducts, setOpenProducts] = React.useState(false)
  const [openUsers, setOpenUsers] = React.useState(false)
  console.log('openUsers', openUsers);

  
  React.useEffect(() => {
    document.title = 'Admin'
    if(!localStorage.getItem('token')){
      window.location.href = '/'
    }
  }, [])

const {loading} = useSelector((state: AppState) => state.products)


const handleNewProduct = () => {
  if(openProducts){
    setOpenProducts(false)
  }
  setOpenNewProduct(!openNewProduct)
}

const handleOpenProducts = () => {
  if(openNewProduct){
    setOpenNewProduct(false)
  }
  setOpenProducts(!openProducts)
}

const handleClose = () => {
  setOpenNewProduct(false)
  setOpenProducts(false)
  setOpenUsers(false)
}

const handleFetchUsers = () => {
  // getAllUsers(user?.email)
  setOpenUsers(!openUsers)
}

  return (
   <>
   {!loading ?  <>
    
     <div className={(!openProducts && !openNewProduct && !openUsers) ? 'admin-empty' : 'admin'}>
       <Navbar />

       <div className="admin_links">
         <button className="btn"onClick={handleNewProduct}>New Product</button>
          <button className="btn"onClick={handleOpenProducts}>Products</button>
        <button className="btn"onClick={handleFetchUsers}>Users</button>
       
     <div className="btnClose">
            {(openNewProduct || openProducts) &&
        <FaWindowClose className="close" onClick={handleClose}/>
          }
     
     </div>
      
       </div>
    </div>
  {openNewProduct && <ProductForm/>}
  {openProducts && <ProductsView />}
  {openUsers && <Users/>}
    </>
    : <Loading/>
    }
   </>
   
  )
}

export default Admin