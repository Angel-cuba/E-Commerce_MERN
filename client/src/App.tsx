import React from 'react';
import {useTheme} from './context/ThemeProvider'
import './styles/App.scss';
import { Routes, Route} from 'react-router-dom';
import Admin from './pages/Admin';
import Home from './pages/Home';
import Navbar from './components/Navbar';


export default function App() {
  const {theme} = useTheme()
  return (
    <div className={theme === 'light' ? 'Principal': 'Principal-Dark'}>
      <Navbar/>
     <Routes>
      <Route path="/admin" element={<Admin />} />  
      <Route  path="/" element={<Home />}/>
    </Routes>  
    </div>
  );
}


