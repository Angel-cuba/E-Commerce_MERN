import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProductsView from '../components/Products/productsView';
import { fetchAllProducts } from '../redux/actions/products.action';
import { verifyToken } from '../api/token';
import '../styles/pages/Home.scss';


const Home = () => {
  const dispatch = useDispatch<any>();

  useEffect(() => {
    // handleCheckValidation();
    dispatch(fetchAllProducts())
  }, [dispatch]);


  const handleCheckValidation = async () => {
    const { isVerified, decodedUser } = await verifyToken();
    
    console.log('isVerified', isVerified);
    console.log('user', decodedUser);
  };

  return (
    <div className="home">
      <button onClick={handleCheckValidation}>CHECK VALIDATION</button>
      <ProductsView />
    </div>
  );
};

export default Home;
