import React from 'react'
import './Cart.css'
import Modal from '../modal/Modal'

const Cart = () => {

  const cartItems = <ul className='cart-items'>{[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map((item) => <li>{item.name}</li>)}</ul>
  return (
    <Modal>
      {cartItems}
      <div className='total'>
        <span>Total Amount</span>
        <psan>35.00</psan>
      </div>
      <div className='actions'>
        <button className='button--alt'>Close</button>
        <button className='button'>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
