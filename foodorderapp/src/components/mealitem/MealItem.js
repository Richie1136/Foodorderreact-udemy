import React, { useContext } from 'react'
import './MealItem.css'
import MealItemForm from '../mealitemform/MealItemForm'
import CartContext from '../../store/cart-context'

const MealItem = ({ name, description, price, id }) => {
  const cartContext = useContext(CartContext)
  const handleAddToCart = (amount) => {
    cartContext.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price
    })
  }

  const prices = `$${price.toFixed(2)}`
  return (
    <li className='meal'>
      <div>
        <h3>{name}</h3>
        <div className='description'>{description}</div>
        <div className='price'>{prices}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={handleAddToCart} />
      </div>
    </li>
  )
}

export default MealItem

