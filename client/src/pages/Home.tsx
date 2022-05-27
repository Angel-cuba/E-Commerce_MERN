import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/pages/Home.scss'

const Home = () => {

useSelector(state => console.log(state))


  return (
    <div className="home">Home</div>
  )
}

export default Home