export interface IProducts {
  _id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}


export type IProduct= {
  name: string;
  description: string;
  image: string;
  category: string;
  price: number;
}

export type DecodedUser = {
  email: string
  iat: string
  exp: string
}