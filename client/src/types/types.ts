export interface IProducts {
  _id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  category: string;
}


export type IProduct= {
  _id?: string;
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
  role: string
}

export type DataOfUser = {
  // name: string
  // picture: string
  email: string
  role: string
}

export type IUser = {
  _id: string;
  name: string;
  lastname: string;
  email: string;
  picture: string;
  role: string;
  band: boolean;

}
