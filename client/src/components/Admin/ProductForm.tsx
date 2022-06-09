import React, { useEffect, useState } from 'react'
import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { DeletingProduct, EditingProduct, NewProduct } from '../../api/requests'
import { Styles } from '../../pages/FirsLoginPage'
import { fetchAllProducts, fetchProductById } from '../../redux/actions/products.action'
import '../../styles/components/Admin/ProductForm.scss'
import { AppState } from '../../types/ProductType'
import { handleToast } from '../../util/helpers'
import { Input } from '../Input'
import View from './View'

const ProductForm = () => {
const {id}: any =useParams()
const dispatch = useDispatch<any>()
const navigate = useNavigate()

  const {product} = useSelector((state: AppState) => state.products)

  const [name, setName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [price, setPrice] =useState<number>( 0)

const body = {name, description, image, category, price}

  
useEffect(() => {
  if(id) {
    dispatch(fetchProductById(id))
  }
},[id, dispatch])


//Value handlers
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

const test = () => {
handleToast('Empty fields')
}

  const handleSubmit = () => {
  if(id) {
    EditingProduct(id, body)
  } else
   {  NewProduct(body)}
  }

    const handleDelete = (id: any) => {
    console.log('delete with id: ' + id)
    DeletingProduct(id)
    dispatch(fetchAllProducts())
    handleToast('Hold')
  }

  const handleMessage = () => {
    handleToast('Message')
    setTimeout(() => {
      navigate('/')
    }, 3500)
  }
    
  // navigate('/')
  return (
    <div  className="productForm">
      <div className="container">
        <div className="form">
        <h1>{id ? 'Editing Product' : 'New Product'}</h1>

          <Input type="text" name="name" placeholder={!id ? 'Name' : `${product?.name}`} value={name}onChange={handleName} style={Styles} message={id && product?.name}/>
           <Input type="text" name="description" placeholder={!id ? 'Description' : `${product?.description}`} value={description}onChange={handleDescription} style={Styles} message={id && product?.description}/>
             <Input type="text" name="image" placeholder={!id  ? 'Image' : `${product?.image}`} value={image} onChange={handleImage} style={Styles} message={id && product?.image}/> 
             <Input type="text" name="category" placeholder={!id  ? 'Category' : `${product?.category}`} value={category} onChange={handleCategory} style={Styles} message={id && product?.category}/>
              <Input type="number" name="price" placeholder={id ? `The price is ${product?.price} €`: 'Price'} onChange={handlePrice} style={Styles} message={id && `${product?.price} €`}/>
             {  
               (id )&&( !name || !description || !image || !category || !price ) ? <button onClick={test}>Button disabled</button> : <button onClick={handleSubmit}>{id ? 'Editing' : 'Save'}</button> 
             }
        </div>
        <div className="view">
<h1>
          This is how the new product will look like!
</h1>
        <View body={body}/>
          </div>
       <div className="" onClick={handleMessage}>
     {id &&  <button className="btn-delete" onClick={() =>handleDelete(id && product?._id)}>
        <FaTrashAlt/>
     
      </button>}
      </div> 
      </div>
    </div> 
  )
}

export default ProductForm