import { IProduct } from "../types/types"
import axios from 'axios'


const API = axios.create({ baseURL: 'http://localhost:3001/products' })
//Sending headers
API.interceptors.request.use((req) => {
      const HEADERS = req.headers as any
      // const local= localStorage.getItem('token') as any
      // const token = JSON.parse(local)
      // console.log('token: ', token);
      const localToken = JSON.parse(localStorage.getItem('token') as any)
      console.log('localToken: ', localToken);
      if(localToken) {
           HEADERS.Authorization = `Bearer ${localToken}` 
      }
      console.log('HEADERS: ', HEADERS);
      return req 
})
 export const sendHeaders = async()=> await axios.post('http://localhost:3001', 
 {},
 {headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token') as any)}`
      }})


// export const AllProducts = async () => await fetch('http://localhost:3001/products/all').then((response) => response.json()).then((data) => data)
 //export const AllProducts = async () => axios.get('http://localhost:3001/products/all').then((response) => response.data)
export const AllProducts = async () =>{
      let token = localStorage.getItem('token') as any
      console.log('token: ', token);
      await axios.get('http://localhost:3001/products/all', 
       {
           headers: {
                  Authorization: `Bearer ${token}`
            }
     }
     )
      .then((response) => response.data)
}

export const ProductById = async (id: string) => {
      const response = await fetch(`http://localhost:3001/products/${id}`)
      const data = await response.json()
      return data 
}

export const NewProduct = async (product: IProduct) => {
      const response = await fetch('http://localhost:3001/products/create', {
            method: 'POST',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
      })
      const data = await response.json()
      console.log(data)
      return data
}

export const EditingProduct = async (id:string,product: IProduct) => {
      console.log(id,product)
      const response = await fetch(`http://localhost:3001/products/${id}/edit`, {
            method: 'PUT',
            headers: {
                  'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                  title: product.name,
                  price: product.price,
                  description: product.description,
                  image: product.image,
                  category: product.category
            })
      })
      const data = await response.json()
      console.log(data)
      return data
}

export const DeletingProduct = async (id:string) => {
      const response = await fetch(`http://localhost:3001/products/${id}/delete`, {
            method: 'DELETE'
      })
      const data = await response.json()
      console.log(data)
      return data
}