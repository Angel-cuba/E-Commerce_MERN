import axios from 'axios';
import {BASE_URL} from '../util/helpers';

export const getAllUsers = async (email: any) => {
  //  const response =
 return await axios.get(`${BASE_URL}/admin/allusers`, {
    headers: {
      user:  `${email}`,
    },
  });
  // console.log(response.data);
  // return response.data
}

export const getAnUser = async ( id: string) => {
  let token = localStorage.getItem('token') as any;
  const response = await axios.get(`${BASE_URL}/users/${id}`, {
    headers: {
      Authorization:  `Bearer ${token}`,
    },
  });
  console.log(response.data);
  return response.data
}