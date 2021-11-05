import CartIcon from '../carticon/CartIcon';
import './HeaderCartButton.css';

const HeaderCartButton = ({ onclick }) => {
  return (
    <button className='button' onClick={onclick}>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>3</span>
    </button>
  );
};

export default HeaderCartButton;
