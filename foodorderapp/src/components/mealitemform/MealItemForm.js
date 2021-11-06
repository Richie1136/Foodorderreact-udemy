import React, { useRef, useState } from 'react'
import './MealItemForm.css'
import Input from '../input/Input'

const MealItemForm = ({ onAddToCart }) => {

  const [AmountisValid, setAmountisValid] = useState(true)

  const amountRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()

    const amount = amountRef.current.value
    const enterNumber = +amount

    if (amount.trim().length === 0 || enterNumber < 1 || enterNumber > 10) {
      setAmountisValid(false)
      return
    }
    onAddToCart(enterNumber)
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <Input
        ref={amountRef} label="Amount" input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '10',
          defaultValue: '1'
        }} />
      <button>Add</button>
      {!AmountisValid && <p>Please Enter a valid amount(1-10)</p>}
    </form>
  )
}

export default MealItemForm
