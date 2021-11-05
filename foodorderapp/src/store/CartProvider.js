import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if (action.type === 'Add Item') {
    const updatedItems = state.items.concat(action.item)
    const updatedTotal = state.totalAmount + action.item.price * action.item.amount
    return { item: updatedItems, totalAmount: updatedTotal }
  } else if (action.type === 'Remove Item') {

  }
  return defaultCartState
}

const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)
  const AddItemToCart = (item) => {
    dispatchCart({ type: 'Add Item', item: item })
  }

  const RemoveItemFromCart = (id) => {
    dispatchCart({ type: 'Remove Item', id: id })
  }

  const Context = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: AddItemToCart,
    removeItem: RemoveItemFromCart
  }
  return <CartContext.Provider value={Context}>
    {children}
  </CartContext.Provider>
}

export default CartProvider
