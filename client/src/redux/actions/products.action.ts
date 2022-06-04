import {Dispatch} from 'redux'
import {AllProducts, DeletingProduct, EditingProduct, NewProduct, ProductById} from '../../api/requests'
import { DELETE_PRODUCT, EDIT_PRODUCT, NEW_PRODUCT, PRODUCTS, PRODUCT_BY_ID } from '../../types/ActionsType'
import { IProduct } from '../../types/types'


export const fetchAllProducts = () => async (dispatch: Dispatch) => {
  try {
    const response = await AllProducts()
    dispatch({
      type: PRODUCTS,
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
      type: PRODUCT_BY_ID,
      payload: response
    })
  } catch (error) {
    console.log(error)
  }
}

export const fetchNewProduct = (product: IProduct) => async (dispatch: Dispatch) => {
  try {
    const response = await NewProduct(product)
    dispatch({
      type: NEW_PRODUCT,
      payload: response
    })
  } catch (error) {
    console.log(error)
  }
}

export const fetchEditProduct = (id: string, product: IProduct) => async (dispatch: Dispatch) => {
  try {
    const response = await EditingProduct(id, product)
    dispatch({
      type: EDIT_PRODUCT,
      payload: response
    })
  } catch (error) {
    console.log(error)
  }
}

export const fetchDeleteProduct = (id: string) => async (dispatch: Dispatch) => {
  try {
    const response = await DeletingProduct(id)
    dispatch({
      type: DELETE_PRODUCT,
      payload: response
    })
  } catch (error) {
    console.log(error)
  }
}
