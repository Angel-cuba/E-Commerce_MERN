import axios from 'axios';

import { DataOfUser, DecodedUser } from '../types/types';
import { BASE_URL } from '../util/helpers';

export const verifyToken = async () => {
  const token = localStorage.getItem('token') as string;

  try {
    const response = await axios.post(
      `${BASE_URL}/token/verify`,
      { token },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const isVerified: boolean = response.data.isVerified;
    const decodedUser: DecodedUser = response.data.user.decodedUser;
    const dataOfUser: DataOfUser = response.data.user.dataOfUser;
console.log(isVerified, decodedUser)
const {name, role} = dataOfUser
    return { name, role };
  } catch (error: any) {
    return { isVerified: false, decodedUser: null };
  }
};
