import {FetchActions, FETCH_PRODUCTS, FETCH_PRODUCT_BY_ID, ProductsState} from '../../types/ActionsType';

export const productsInitialState: ProductsState = {
  allProducts: [],
  product: null
}

export default function countries(
  state = productsInitialState,
  action: FetchActions
){
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload
      }
    case FETCH_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.payload
      }
    default:
      return state
  }
}