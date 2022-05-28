import React from 'react'

type InputProps = {
  type: string,
  name: string
  placeholder: string,
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  // onBlur: (event: React.FocusEvent<HTMLInputElement>) => void,
  // onFocus: (event: React.FocusEvent<HTMLInputElement>) => void,
  style:{[key:string]:string}
  className?: string,
  // error: string,
  // touched: boolean,
}



export const Input = ({ type, name, placeholder, value, onChange, style }: InputProps) => {
  return (
    <input type="text" name={name} placeholder={placeholder} value={value} style={style} onChange={onChange} />
  )
}
