import axios from 'axios';

import { DecodedUser } from '../types/types';
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
    // const isVerified: boolean = response.data.isVerified;
    const decodedUser: DecodedUser = response.data.user.decodedUser;
    //const dataOfUser: DataOfUser = response.data.user.dataOfUser;
   //Data sent from the server to the client(initial state of the reducer)
  //  console.log(response.data);
  console.log(decodedUser);
const {email, role} = decodedUser
    return { email, role };
  } catch (error: any) {
    return { isVerified: false, decodedUser: null };
  }
};
