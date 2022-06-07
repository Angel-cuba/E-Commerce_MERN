import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';

import ProductsView from '../components/Products/productsView';
import { fetchAllProducts } from '../redux/actions/products.action';
import { verifyToken } from '../api/token';
import '../styles/pages/Home.scss';
import { useNavigate } from 'react-router-dom';
// import NotUserFound from './NotUserFound';
import { verifyTokenExpiration } from '../util/decode';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { AppState } from '../types/ProductType';
import Loading from '../components/Loading';


const Home = () => {
const userToken = localStorage.getItem('token') as string 

  const dispatch = useDispatch<any>();
  const navigate = useNavigate()

  const {loading} =useSelector((state: AppState) =>  state.products)

  useEffect(() => {

    document.title = 'Home'
    handleCheckValidation();
    verifyTokenExpiration(userToken, navigate);

    dispatch(fetchAllProducts());
    
  },[dispatch]);


  const handleCheckValidation = async () => {
    const { name, role } = await verifyToken();
 
  //  if(!decodedUser || !name){
  //   navigate('/login')
  //   }
    if(name){
      
    localStorage.setItem('user', [name, role ]as any )
    }
    return null
  };



  if(loading){
    return <Loading/>
  }

  return (   
   <>  
      <div className="home">
       <Navbar userToken={userToken} />

      <ProductsView />
    </div>    
   </>
  );
};

export default Home;
