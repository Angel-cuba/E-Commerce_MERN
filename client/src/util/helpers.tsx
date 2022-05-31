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
const handleHold = () => {
  toast.success('Wait a second..., we are deleting this product', {
    position: 'top-center',
    duration: 2000,
    style: {
      background: '#00e832',
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
const handleMessage = () => {
  toast.success('Redirecting after message', {
    position: 'top-center',
    duration: 3000,
    style: {
      background: '#360000',
      color: '#ffffff',
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
  if(options === 'Hold'){
    handleHold()
  }
  if(options === 'Message'){
    handleMessage()
  }
}