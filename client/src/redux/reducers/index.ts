import {combineReducers} from 'redux'

import products from './products.reducer'
import cart from './cart.reducer'


const createRootReducer =()=> combineReducers({
  products,
  cart
})

export default createRootReducer