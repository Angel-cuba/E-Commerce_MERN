import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';

import ProductsView from '../components/Products/productsView';
import { fetchAllProducts } from '../redux/actions/products.action';
import { verifyToken } from '../api/token';
import '../styles/pages/Home.scss';
import { useNavigate } from 'react-router-dom';
import NotUserFound from './NotUserFound';


const Home = () => {
const user = localStorage.getItem('token')
  const dispatch = useDispatch<any>();
  const navigate = useNavigate()

const [checkUser, setCheckUser] = React.useState<any>(false)
  useEffect(() => {
    document.title = 'Home'
   if(!user){
      handleCheckValidation();
    }
    dispatch(fetchAllProducts());
  });

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

  return (   
   <>
    {
      !user || !checkUser ? <NotUserFound setCheckUser={setCheckUser}/> :  <div className="home">
        {/* TODO: Remove this component  */}
      {/* <button onClick={handleCheckValidation}>CHECK VALIDATION</button> */}
      <ProductsView />
    </div>
    }
   </>
  );
};

export default Home;
