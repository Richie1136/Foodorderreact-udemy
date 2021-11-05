import React from 'react'
import CartContext from './cart-context'

const CartProvider = ({ children }) => {
  const AddItemToCart = (item) => {

  }

  const RemoveItemFromCart = (id) => {

  }

  const Context = {
    items: [],
    totalAmount: 0,
    addItem: AddItemToCart,
    removeItem: RemoveItemFromCart
  }
  return <CartContext.Provider value={Context}>
    {children}
  </CartContext.Provider>
}

export default CartProvider
