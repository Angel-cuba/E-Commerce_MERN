import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { NewProduct } from '../../api/requests'
import { Styles } from '../../pages/Login'
import { fetchProductById } from '../../redux/actions/products.action'
import '../../styles/components/Admin/ProductForm.scss'
import { AppState } from '../../types/ActionsType'
import { Input } from '../Input'
import View from './View'

const ProductForm = () => {
  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [price, setPrice] =useState<number>(0)
  const body = {name, description, image, category, price}
  console.log(body)

  const dispatch = useDispatch()

  
const {id}: any =useParams()
console.log('id',id)
useEffect(() => {
  if(id) {
    fetchProductById(id)(dispatch)
  }
},[id, dispatch])
useSelector((state: AppState) => console.log(state))
  const {product} = useSelector((state: AppState) => state.products)
  console.log(product)


  const handleName= (e: React.ChangeEvent<HTMLInputElement>)=> {
    setName(e.target.value)
  }
    const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }
    const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.value)
  }
  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value)
  }
  const handlePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value))
  }
// const handleProductValues = ({target: {name, value}}: React.ChangeEvent<HTMLInputElement>) => {
//   setProduct({
//     ...product,
//     [name]: value as any
//   })
// }
// if(product) {
//   setName(product.name)
//   setDescription(product.description)
//   setImage(product.image)
//   setCategory(product.category)
//   setPrice(product.price)
// }

  const handleSubmit = () => {
    NewProduct(body)
  }
  return (
    <div  className="productForm">
      <div className="container">
        <div className="form">
        <h1>New Product</h1>

          <Input type="text" name="name" placeholder='Name of product' value={product ? product.name : name} onChange={handleName} style={Styles}/>
           <Input type="text" name="description" placeholder='Some description' value={product ? product.description : description} onChange={handleDescription} style={Styles}/>
             <Input type="text" name="image" placeholder='Image' value={product ? product.image : image} onChange={handleImage} style={Styles}/> 
             <Input type="text" name="category" placeholder='Category' value={product ? product.category : category} onChange={handleCategory} style={Styles}/>
              <Input type="number" name="price" placeholder={id ? `The price is ${product?.price} €`: 'Price'} min='1' max='100'  onChange={handlePrice} style={Styles}/>
             <button onClick={handleSubmit}>{id ? 'Editing' : 'Save'}</button>
        </div>
        <div className="view">
<h1>
          This is how the new product will look like!
</h1>
        <View body={body}/>
          </div>
      </div>
    </div>
  )
}

export default ProductForm