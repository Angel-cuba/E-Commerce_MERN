import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createRootReducer from './reducers'
import { cartInitialState } from './reducers/cart.reducer'
import { productsInitialState } from './reducers/products.reducer'

const appState = {
  allProducts: productsInitialState,
  cart: cartInitialState
}


export const store = createStore(
  createRootReducer(),
  appState,
  applyMiddleware(thunk)

)