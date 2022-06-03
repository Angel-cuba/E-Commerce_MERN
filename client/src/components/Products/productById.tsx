import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchProductById } from '../../redux/actions/products.action'
import { AppState } from '../../types/ActionsType'
import '../../styles/components/Products.scss'

const ProductId = () => {
  const dispatch = useDispatch<any>()
  const {productId}: any =useParams()
  const {product} = useSelector((state: AppState) => state.products)
  
  useEffect(() => {
    dispatch(fetchProductById(productId))
  }, [productId, dispatch])

console.log(product)

  return (
   <>
    {product && 
      <div  className="productById">
        <div className="product">
          {product.name}
        </div>
        
      </div>

    }
   </>
  )
}

export default ProductId


