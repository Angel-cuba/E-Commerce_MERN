export interface IProducts {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}


export type CartItem = {
  // product: IProducts;
   id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  quantity: number;
}