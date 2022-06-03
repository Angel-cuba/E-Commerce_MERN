import { IProducts } from "./types";

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
