export const AllProducts = async () => {
     const response = await fetch('http://localhost:3001/products/all')
      const data =  response.json()
      return data
}

export const ProductById = async (id: string) => {
      const response = await fetch('http://localhost:3001/products/' + id)
      const data = response.json()
      return data 
}
