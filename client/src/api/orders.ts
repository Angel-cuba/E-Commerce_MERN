import { BASE_URL } from "../util/helpers";
import axios from 'axios'

export const sendOrder = async (order: any) => {
  const response = await axios.post(`${BASE_URL}/orders/create`, order);
  return response.data;
}

export const orderHistory = async (userId: any) => {
  const response = await axios.get(`${BASE_URL}/orders/user`, userId);
  return response.data;
}