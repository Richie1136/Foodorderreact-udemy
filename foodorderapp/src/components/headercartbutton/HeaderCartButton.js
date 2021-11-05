import { useContext } from 'react'
import CartContext from '../../store/cart-context';
import CartIcon from '../carticon/CartIcon';
import './HeaderCartButton.css';

const HeaderCartButton = ({ onclick }) => {
  const cart = useContext(CartContext)

  const numberofItems = cart.items.reduce((currentNum, item) => {
    return currentNum + item.amount
  }, 0)
  return (
    <button className='button' onClick={onclick}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>{numberofItems}</span>
    </button>
  );
};

export default HeaderCartButton;
