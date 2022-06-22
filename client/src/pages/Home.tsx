import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProductsView from '../components/Products/productsView';
import { fetchAllProducts } from '../redux/actions/products.action';
import '../styles/pages/Home.scss';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { AppState } from '../types/ProductType';

const Home = () => {
  const dispatch = useDispatch<any>();

  useSelector((state: AppState) => console.log(state));

  useEffect(() => {
    document.title = 'Home';
    // verifyTokenExpiration(userToken, navigate);
    dispatch(fetchAllProducts());
  }, [dispatch]);

  return (
    <div className="home">
      <Navbar />
      <ProductsView />
    </div>
  );
};

export default Home;
