import React from 'react';
import {useTheme} from './context/ThemeProvider'
import './styles/App.scss';
import { Routes, Route } from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home';
import ProductId from './components/Products/productById';
import Login from './pages/Login';
import ProductForm from './components/Admin/ProductForm';
import NotUserFound from './pages/NotUserFound';


export default function App() {
  const {theme} = useTheme()
  const userToken = localStorage.getItem('token')

  return (
    <div className={theme === 'light' ? 'Principal': 'Principal-Dark'}>
     <Routes>
           <Route path="/" element={!userToken ? <Login /> : <Home />} /> 
          
          
      <Route path="/admin" element={<Admin />} />
      <Route path="newproduct" element={<ProductForm />} />
      <Route path=":id/editing" element={<ProductForm />} />
      <Route path="/login" element={<Login />} />
            

     <Route path="/products/:productId" element={<ProductId/>}/>
      <Route path="/notfound" element={<NotUserFound />} />
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Home/>}/>
                    
    </Routes>  
    </div>
  );
}


