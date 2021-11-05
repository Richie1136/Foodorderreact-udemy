import React from 'react'
import './MealItemForm.css'
import Input from '../input/Input'

const MealItemForm = () => {
  return (
    <form className='form'>
      <Input label="Amount" input={{
        id: 'amount',
        type: 'number',
        min: '1',
        max: '10',
        defaultValue: '1'
      }} />
      <button>Add</button>
    </form>
  )
}

export default MealItemForm
