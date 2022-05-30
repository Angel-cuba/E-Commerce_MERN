import { IProduct } from "../types/types"

export const AllProducts = async () => {
     const response = await fetch('http://localhost:3001/products/all')
      const data =  await response.json()
      return data
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