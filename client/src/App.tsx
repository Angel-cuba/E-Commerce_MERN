import React, { useEffect } from 'react';
import {useTheme} from './context/ThemeProvider'
import './styles/App.scss';
import { Routes, Route} from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from './redux/actions/products.action';
import ProductId from './components/Products/productById';
import Login from './pages/Login';
import ProductForm from './components/Admin/ProductForm';


export default function App() {
  const {theme} = useTheme()
  const dispatch = useDispatch()

useEffect(() => {
  fetchAllProducts()(dispatch)
  // dispatch(fetchAllProducts())
  }, [dispatch])
  return (
    <div className={theme === 'light' ? 'Principal': 'Principal-Dark'}>
      <Navbar/>
     <Routes>
       <Route path="/products/:productId" element={<ProductId/>}/>
      <Route path="/admin" element={<Admin />} />  
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<ProductForm />} />
      <Route path="/product/:id/editing" element={<ProductForm />} />
      <Route  path="/" element={<Home />}/>
    </Routes>  
    </div>
  );
}


