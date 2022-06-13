import axios from 'axios';

import { IProduct } from '../types/types';
import { BASE_URL } from '../util/helpers';


export const AllProducts = async () => {
  let token = localStorage.getItem('token') as any;
  const response = await axios.get(`${BASE_URL}/products/all`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const ProductById = async (id: string) => {
  let token = localStorage.getItem('token') as any;

  const response = await axios.get(`${BASE_URL}/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const NewProduct = async (product: IProduct, email: any) => {
  let token = localStorage.getItem('token') as any;
  console.log(product);

  const response = await axios.post(`${BASE_URL}/products/create`,  product, {
    headers: {
      Authorization: `Bearer ${token}`,
      user: `${email}`,
    },
  }
  );
  console.log(response.data);
  return response.data;
};

export const EditingProduct = async (id: string, product: IProduct, email: any) => {
  console.log(id, product);
  const response = await axios.put(`${BASE_URL}/products/${id}/edit`, product,{
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      user: `${email}`,
    }},
  );

  console.log(response.data);
  return response.data;
};

export const DeletingProduct = async (id: string, email: any) => {
  console.log(id);
  const response = await axios.delete(`${BASE_URL}/products/${id}/delete`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      user: `${email}`,
    },
  });
  console.log(response.data);
  return response.data;
};
