import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import './Header.css';

const Header = (props) => {
  return (
    <>
      <header className='header'>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className='main-image'>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </>
  );
};

export default Header;

