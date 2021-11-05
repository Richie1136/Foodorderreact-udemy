import React from 'react'
import './MealItem.css'
import MealItemForm from '../mealitemform/MealItemForm'

const MealItem = ({ name, description, price, id }) => {

  const prices = `$${price.toFixed(2)}`
  return (
    <li className='meal'>
      <div>
        <h3>{name}</h3>
        <div className='description'>{description}</div>
        <div className='price'>{prices}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  )
}

export default MealItem
