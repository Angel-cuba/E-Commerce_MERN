import { CartState } from "./CartActions";
import { IProducts } from "./types";


//Product types
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCT_BY_ID = 'FETCH_PRODUCT_BY_ID';

//Actions type for products
export type FetchProductsAction = {
  type: typeof FETCH_PRODUCTS,
  payload: IProducts[]
}

export type FetchProductByIdAction = {
  type: typeof FETCH_PRODUCT_BY_ID,
  payload: IProducts
}

export type FetchActions = FetchProductsAction | FetchProductByIdAction;


//Initial state
export type ProductsState = {
  allProducts: IProducts[],
  product: IProducts | null
}

export type AppState = {
  products: ProductsState,
  cart: CartState
}