import { useContext } from 'react'
import './Cart.css'
import Modal from '../modal/Modal'
import CartContext from '../../store/cart-context'

const Cart = ({ onClose }) => {
  const cartContext = useContext(CartContext)

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`

  const hasItems = cartContext.items.length > 0

  const cartItems = <ul className='cart-items'>{cartContext.items.map((item) => <li key={item.key}>{item.name}</li>)}</ul>
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
