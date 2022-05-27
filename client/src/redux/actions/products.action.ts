import {Dispatch} from 'redux'
import {AllProducts, ProductById} from '../../api/requests'
import { FETCH_PRODUCTS, FETCH_PRODUCT_BY_ID } from '../../types/ActionsType'


export const fetchAllProducts = () => async (dispatch: Dispatch) => {
  try {
    const response = await AllProducts()
    dispatch({
      type: FETCH_PRODUCTS,
      payload: response
    })
  } catch (error) {
    console.log(error)
  }
}

export const fetchProductById = (id: string) => async (dispatch: Dispatch) => {
  try {
    const response = await ProductById(id)
    dispatch({
      type: FETCH_PRODUCT_BY_ID,
      payload: response
    })
  } catch (error) {
    console.log(error)
  }
}
