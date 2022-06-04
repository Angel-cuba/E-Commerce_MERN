import { CartState } from "./CartActions";
import { IProducts } from "./types";


//Product types
export const PRODUCTS = 'FETCH_PRODUCTS';
export const PRODUCT_BY_ID = 'FETCH_PRODUCT_BY_ID';
export const NEW_PRODUCT = 'FETCH_NEW_PRODUCT';
export const EDIT_PRODUCT = 'FETCH_EDIT_PRODUCT';
export const DELETE_PRODUCT = 'FETCH_DELETE_PRODUCT';
//TODO: Features
export const FETCH_PRODUCTS_BY_CATEGORY = 'FETCH_PRODUCTS_BY_CATEGORY';
export const FETCH_PRODUCTS_BY_SEARCH = 'FETCH_PRODUCTS_BY_SEARCH';
export const FETCH_PRODUCTS_BY_BRAND = 'FETCH_PRODUCTS_BY_BRAND';
export const FETCH_PRODUCTS_BY_PRICE = 'FETCH_PRODUCTS_BY_PRICE';
export const FETCH_PRODUCTS_BY_SORT = 'FETCH_PRODUCTS_BY_SORT';


//Actions type for products
export type ProductsAction = {
  type: typeof PRODUCTS,
  payload: IProducts[]
}
export type ProductByIdAction = {
  type: typeof PRODUCT_BY_ID,
  payload: IProducts
}
export type NewProductAction = {
  type: typeof NEW_PRODUCT,
  payload: IProducts
}
export type EditProductAction = {
  type: typeof EDIT_PRODUCT,
  payload: IProducts
}
export type DeleteProductAction = {
  type: typeof DELETE_PRODUCT,
  payload: IProducts
}
export type ProductsActions = ProductsAction | ProductByIdAction | NewProductAction | EditProductAction |DeleteProductAction;

//Initial state
export type ProductsState = {
  allProducts: IProducts[],
  product: IProducts | null
}

export type AppState = {
  products: ProductsState,
  cart: CartState
}