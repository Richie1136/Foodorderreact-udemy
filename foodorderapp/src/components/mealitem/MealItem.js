import React from 'react'
import './MealItem.css'

const MealItem = ({ name, description, price }) => {

  const price2 = `$${price.toFixed(2)}`
  return (
    <li className='meal'>
      <div>
        <h3>{name}</h3>
        <div className='description'>{description}</div>
        <div className='price'>{price2}</div>
      </div>
      <div>

      </div>
    </li>
  )
}

export default MealItem
