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
import NotUserFound from './pages/NotUserFound';


export default function App() {
  const {theme} = useTheme()
   const userDetailsWithRole = localStorage.getItem('user')?.split(',') as any
  console.log('user Role from backEnd: ',userDetailsWithRole)
  const userToken = localStorage.getItem('token')

  return (
    <div className={theme === 'light' ? 'Principal': 'Principal-Dark'}>
     <Routes>
       {
          userToken ?
          <>
          
      <Route path="admin" element={<Admin />} >
          <Route path="newproduct" element={<ProductForm />} />
          <Route path=":id/editing" element={<ProductForm />} />
          <Route path="home" element={<Home />} />
      </Route>  

     <Route path="products/:productId" element={<ProductId/>}/>
      <Route path="notfound" element={<NotUserFound />} />
      <Route path="/" element={<Home />} />
      <Route path="" element={<Home/>}/>
          </>
          :
      <Route path="login" element={<Login />} />

       }

       
      

       
    </Routes>  
    </div>
  );
}


