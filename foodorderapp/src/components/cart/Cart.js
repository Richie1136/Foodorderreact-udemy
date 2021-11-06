import { useContext } from 'react'
import './Cart.css'
import Modal from '../modal/Modal'
import CartContext from '../../store/cart-context'
import CartItem from '../cartitem/CartItem'

const Cart = ({ onClose }) => {
  const cartContext = useContext(CartContext)

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`

  const hasItems = cartContext.items.length > 0

  const cartItemRemove = (id) => {
  }

  const cartItemAdd = (item) => {
  }

  const cartItems = <ul className='cart-items'>{cartContext.items.map((item) => (
    <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onAdd={cartItemAdd} onRemove={cartItemRemove} />
  ))}
  </ul>

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className='total'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className='actions'>
        <button className='button--alt' onClick={onClose}>Close</button>
        {hasItems && <button className='button'>Order</button>}
      </div>
    </Modal >
  )
}

export default Cart
