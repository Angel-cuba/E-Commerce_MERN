import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link, Outlet} from 'react-router-dom'
import ProductForm from '../components/Admin/ProductForm'
import Loading from '../components/Loading'
import Navbar from '../components/Navbar'
import ProductsView from '../components/Products/productsView'
import '../styles/pages/Admin.scss'
import { AppState } from '../types/ProductType'


const Admin = () => {
  const [openNewProduct, setOpenNewProduct] = React.useState<boolean>(false)
  const [openProducts, setOpenProducts] = React.useState<boolean>(false)
  console.log(openNewProduct)
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

if(loading){
  return <Loading/>
}

  return (
    <>
    
     <div className="admin">
       <Navbar />

       <div className="admin_links">
         <button onClick={handleNewProduct}>New Product</button>
          <button onClick={handleOpenProducts}>Products</button>
      {/* <Link to="/admin/home">List of Product</Link>
      <Link to="/admin/newproduct">New Product</Link> */}
      <Link to="/admin">
        <FaArrowCircleLeft className="arrow"/>
      </Link>
       </div>
    </div>
  {openNewProduct && <ProductForm/>}
  {openProducts && <ProductsView />}
    {/* <Outlet /> */}
    </>
   
  )
}

export default Admin