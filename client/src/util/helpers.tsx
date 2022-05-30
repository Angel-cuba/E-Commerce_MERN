import React from 'react'
import {toast} from 'react-hot-toast'

const helpers = () => {
  return (
    <div>helpers</div>
  )
}

export default helpers

const handleEmptyFields = () => {
  toast.success('Make sure you have filled all the required', {
    position: 'top-left',
    duration: 2000,
    style: {
      background: '#00e4e8',
      color: '#0f0f0f',
      textShadow: '0px 0px 10px #c8c8c8c3',
      border: 'none',
      fontSize: '20px',
      fontWeight: 'bold',
      padding: '10px',
      textAlign: 'center'
    },
     icon: '✔️',
  })
}

export const handleToast = (options: string) => {
  if(options === 'Empty fields'){
    handleEmptyFields()
  }
}