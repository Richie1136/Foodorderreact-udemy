import HeaderCartButton from '../headercartbutton/HeaderCartButton';
import mealsImg from '../../assets/meals.jpg';
import './Header.css';

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className='header'>
        <h1>ReactMeals</h1>
        <HeaderCartButton onclick={onShowCart} />
      </header>
      <div className='main-image'>
        <img src={mealsImg} alt='A table full of delicious food!' />
      </div>
    </>
  );
};

export default Header;

