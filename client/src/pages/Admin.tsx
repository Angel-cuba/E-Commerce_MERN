import React from 'react'
import { FaWindowClose } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import ProductForm from '../components/Admin/ProductForm'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import ProductsView from '../components/Products/productsView'
import '../styles/pages/Admin.scss'
import { AppState } from '../types/ProductType'


const Admin = () => {
  const [openNewProduct, setOpenNewProduct] = React.useState(false)
  const [openProducts, setOpenProducts] = React.useState(false)
  React.useEffect(() => {
    document.title = 'Admin'
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
}

// if(loading){
//   return <Loading/>
// }

  return (
   <>
   {!loading ?  <>
    
     <div className={(!openProducts && !openNewProduct) ? 'admin-empty' : 'admin'}>
       <Navbar />

       <div className="admin_links">
         <button className="btn"onClick={handleNewProduct}>New Product</button>
          <button className="btn"onClick={handleOpenProducts}>Products</button>
       
     <div className="btnClose">
            {(openNewProduct || openProducts) &&
        <FaWindowClose className="close" onClick={handleClose}/>
          }
     
     </div>
      
       </div>
    </div>
  {openNewProduct && <ProductForm/>}
  {openProducts && <ProductsView />}
    </>
    : <Loading/>
    }
   </>
   
  )
}

export default Admin