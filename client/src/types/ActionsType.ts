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

//Cart types
export const ADD_CART = 'ADD_CART';
export const REMOVE_FROM_CART = 'REMOVE_CART';
export type AddToCartAction = {
  type: typeof ADD_CART,
  payload: IProducts
}
export type RemoveFromCartAction = {
  type: typeof REMOVE_FROM_CART,
  payload: IProducts
}

export type CartActions = AddToCartAction | RemoveFromCartAction

//Initial state
export type CartState = {
  inCart: IProducts[] | null
}

//Initial state
export type ProductsState = {
  allProducts: IProducts[],
  product: IProducts | null
}

export type AppState = {
  products: ProductsState,
  cart: CartState
}