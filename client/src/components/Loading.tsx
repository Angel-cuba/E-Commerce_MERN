import React from 'react';
import { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Loading.scss';
import { handleToast } from '../util/helpers';

const Loading = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    const token = localStorage.getItem('token') as any;
    const goBack = () => {
      navigate('/login');
    };
    setTimeout(() => {
      if (!token) {
        console.log('no hay token');
        handleToast('Redirect');
        goBack();
      }
    }, 1000);
  }, [navigate]);

  return (
    <div className="loading">
      <div className="loading-spinner"></div>
      <div className="loading-text">
        <h1>Loading...</h1>
      </div>
      <div className="loading-spinner-circle"></div>
      <div className="loading-spinner-line"></div>
      <Toaster />
    </div>
  );
};

export default Loading;
