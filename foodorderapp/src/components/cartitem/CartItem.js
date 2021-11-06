import './CartItem.css';

const CartItem = ({ price, amount, onAdd, onRemove, name }) => {
  const prices = `$${price.toFixed(2)}`;

  return (
    <li className={'cart-item'}>
      <div>
        <h2>{name}</h2>
        <div className='summary'>
          <span className='price'>{prices}</span>
          <span className='amount'>x {amount}</span>
        </div>
      </div>
      <div className='actions'>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;