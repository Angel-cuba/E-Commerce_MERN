import axios from 'axios';
import {BASE_URL} from '../util/helpers';

export const getAllUsers = async (email: any) => {
  console.log(email);
  const response = await axios.get(`${BASE_URL}/admin/allusers`, {
    headers: {
      user:  `${email}`,
    },
  });
  console.log(response.data);
  return response.data
}