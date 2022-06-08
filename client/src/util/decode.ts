import jwtDecode, {JwtPayload} from 'jwt-decode';


export const verifyTokenExpiration = async (token: string, navigate: any)  =>{

  try {
    const decoded: JwtPayload = jwtDecode(token);
    if((decoded.exp as any) * 1000 < new Date().getTime()){
      navigate('/login');
      return false;
    }
    console.log('good to go', decoded);
    return { isVerified: true, decodedUser: decoded };
  } catch (error) {
    return { isVerified: false, decodedUser: null };
  }
}