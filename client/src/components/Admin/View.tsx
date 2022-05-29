import React from 'react'

const View = ({body}: any) => {
  return (
    <div>
      <h2>{body.name}</h2>
      <h2>{body.description}</h2>
      <h2>{body.image}</h2>
      <h2>{body.category}</h2>
      <h2>{body.price} €</h2>

    </div>
  )
}

export default View