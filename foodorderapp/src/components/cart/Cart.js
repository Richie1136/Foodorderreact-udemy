import { useContext, useState } from 'react'
import './Cart.css'
import Modal from '../modal/Modal'
import CartContext from '../../store/cart-context'
import CartItem from '../cartitem/CartItem'
import Checkout from '../checkout/Checkout'

const Cart = ({ onClose }) => {
  const [checkout, setCheckout] = useState(false)
  const cartContext = useContext(CartContext)

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`

  const hasItems = cartContext.items.length > 0

  const cartItemRemove = (id) => {
    cartContext.removeItem(id)
  }

  const cartItemAdd = (item) => {
    cartContext.addItem({ ...item, amount: 1 })
  }

  const handleOrder = () => {
    setCheckout(true)
  }

  const cartItems = <ul className='cart-items'>{cartContext.items.map((item) => (
    <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onAdd={cartItemAdd.bind(null, item)} onRemove={cartItemRemove.bind(null, item.id)} />
  ))}
  </ul>

  const modalActions = <div className='actions'>
    <button className='button--alt' onClick={onClose}>Close</button>
    {hasItems && <button className='button' onClick={handleOrder}>Order</button>}
  </div>

  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className='total'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {checkout && <Checkout onClose={onClose} />}
      {!checkout && modalActions}
    </Modal >
  )
}

export default Cart
