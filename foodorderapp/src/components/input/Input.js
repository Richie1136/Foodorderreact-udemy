import React from 'react'
import './Input.css'

const Input = ({ label, input }) => {
  return (
    <div className='input'>
      <label htmlFor={input.id}>{label}</label>
      <input  {...input} />
    </div>
  )
}

export default Input
