import React from 'react'
import { useSelector } from 'react-redux'
import ProductsView from '../components/Products/productsView'
import '../styles/pages/Home.scss'

const Home = () => {

useSelector(state => console.log(state))


  return (
    <div className="home">
      <ProductsView/>
    </div>
  )
}

export default Home