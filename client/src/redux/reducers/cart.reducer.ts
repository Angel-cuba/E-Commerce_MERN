import { ADD_CART, CartActions, CartState, REMOVE_FROM_CART } from "../../types/ActionsType";

export const cartInitialState: CartState = {
  inCart: []
}
export default function cart(
state = cartInitialState,
action: CartActions
){
  switch (action.type) {
    case ADD_CART:
      return{  ...state,
        // cart: [...state.cart, action.payload]
      }
    case REMOVE_FROM_CART:
      return state
      // {
      //   ...state,
      //   cart: state.cart.filter(product => product.id !== action.payload.id)
      // }
    default:
      return state
  }
}