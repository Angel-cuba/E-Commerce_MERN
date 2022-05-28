import React from 'react'
import { useSelector } from 'react-redux'
import { AppState } from '../../types/ActionsType'
import { IProducts } from '../../types/types'
import Products from './product'
import '../../styles/components/Products.scss'

const ProductsView = () => {
 const {allProducts} = useSelector((state: AppState) => state.products)

  return (
    <div className="product_container">
{
  allProducts.map((product: IProducts, index: number) => <Products key={index} product={product}/>
  )
}
    </div>
  )
}

export default ProductsView