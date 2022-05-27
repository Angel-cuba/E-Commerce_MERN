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
