import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';

import ProductsView from '../components/Products/productsView';
import { fetchAllProducts } from '../redux/actions/products.action';
import { verifyToken } from '../api/token';
import '../styles/pages/Home.scss';


const Home = () => {
const user = localStorage.getItem('token')
  const dispatch = useDispatch<any>();


  useEffect(() => {
    // handleCheckValidation();
    handlerUser()
  });

const handlerUser = () => {
    if(user){
      setTimeout(() =>dispatch(fetchAllProducts()) , 1000)
    }
}

  const handleCheckValidation = async () => {
    const { isVerified, decodedUser, dataOfUser } = await verifyToken();
    
    console.log('isVerified', isVerified);
    console.log('user', decodedUser);
    console.log('dataOfUser', dataOfUser);
   if(decodedUser){
    localStorage.setItem('user', [dataOfUser.role, dataOfUser.name, dataOfUser.picture ]as any )
    }
  };

  return (   
   <>
    {
      user && <div className="home">
      <button onClick={handleCheckValidation}>CHECK VALIDATION</button>
      <ProductsView />
    </div>
    }
   </>
  );
};

export default Home;
