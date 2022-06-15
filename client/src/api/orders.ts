import { BASE_URL } from "../util/helpers";
import axios from 'axios'

export const sendOrder = async (order: any) => {
  let token = localStorage.getItem('token') as any;
  const response = await axios.post(`${BASE_URL}/orders/create`, order, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export const orderHistory = async (userId: any) => {
  let token = localStorage.getItem('token') as any;

  const response = await axios.get(`${BASE_URL}/orders/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  );
  console.log('response', response.data);
  return response.data;
}

