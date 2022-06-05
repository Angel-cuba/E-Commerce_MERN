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
import Login from './Login';


const Home = () => {
const userToken = localStorage.getItem('token') as string 
  const dispatch = useDispatch<any>();
  const navigate = useNavigate()

   const userDetailsWithRole = localStorage.getItem('user')?.split(',') as any
  console.log('user Role from backEnd: ',userDetailsWithRole)
  // const userToken = localStorage.getItem('token')

  useEffect(() => {
    document.title = 'Home'
  //  if(!user){
    handleCheckValidation();
    // }
    // handleTokenValidation();
    dispatch(fetchAllProducts());
  });


const handleTokenValidation = () => {
    verifyTokenExpiration(userToken, navigate);

    // verifyTokenExpiration(user, navigate)
}


  const handleCheckValidation = async () => {
    const { decodedUser, dataOfUser } = await verifyToken();
 
   if(!decodedUser || !dataOfUser){
    navigate('/login')
    }
    if(dataOfUser){
    localStorage.setItem('user', [dataOfUser?.role, dataOfUser?.name, dataOfUser?.picture ]as any )
    }
    return null
  };

  //if user is not found
  // if(!userToken){
  //   return <NotUserFound/>
  // }
 if(!userToken){
    return <Login/>
  }

  return (   
   <>
    
      {/* !user || !checkUser ? <NotUserFound setCheckUser={setCheckUser}/> :   */}
      
      <div className="home">
       <Navbar />

        {/* TODO: Remove this component  */}
      <ProductsView />
      <button onClick={handleTokenValidation}>CHECK VALIDATION</button>

    </div>
    
   </>
  );
};

export default Home;
