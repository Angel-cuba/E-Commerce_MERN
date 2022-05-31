import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProductsView from '../components/Products/productsView'
import { fetchAllProducts } from '../redux/actions/products.action'
import '../styles/pages/Home.scss'

const Home = () => {
   const dispatch = useDispatch()

useEffect(() => {
  fetchAllProducts()(dispatch)
  // dispatch(fetchAllProducts())
  }, [dispatch])

  return (
    <div className="home">
      <ProductsView/>
    </div>
  )
}

export default Home