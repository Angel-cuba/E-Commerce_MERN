import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ProductsView from '../components/Products/productsView'
import { fetchAllProducts } from '../redux/actions/products.action'
import '../styles/pages/Home.scss'
import axios from 'axios'

const Home = () => {
   const dispatch = useDispatch()

useEffect(() => {
  fetchAllProducts()(dispatch)
  // dispatch(fetchAllProducts())
  test()
  }, [dispatch])

  const test = () => {
    console.log('test')
    axios.get('http://localhost:3001/products/all').then(res => {
      console.log(res.data)
    
  })}

  return (
    <div className="home">
      <ProductsView/>
    </div>
  )
}

export default Home