import React from 'react';
import {useTheme} from './context/ThemeProvider'
import './styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ProductId from './components/Products/productById';
import Login from './pages/Login';
import ProductForm from './components/Admin/ProductForm';


export default function App() {
  const {theme} = useTheme()
   const userDetailsWithRole = localStorage.getItem('user')?.split(',') as any
  console.log('user Role from backEnd: ',userDetailsWithRole[0])

  return (
    <div className={theme === 'light' ? 'Principal': 'Principal-Dark'}>
       <Navbar/>
     <Routes>
      <Route path="/login" element={<Login />} />

       
      <Route path="/admin" element={<Admin />} />  
      <Route path="/product" element={<ProductForm />} />
     <Route path="/products/:productId" element={<ProductId/>}/>
      <Route path="/product/:id/editing" element={<ProductForm />} />


      <Route path="/home" element={<Home />} />
      <Route path="*" element={<Home/>}/>

       
    </Routes>  
    </div>
  );
}


