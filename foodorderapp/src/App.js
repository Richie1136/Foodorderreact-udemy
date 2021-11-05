import './App.css';
import Header from './components/header/Header';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';
import { useState } from 'react'


function App() {
  const [showCart, setShowCart] = useState(false)

  const ShowCartHandler = () => {
    setShowCart(true)
  }

  const HideCartHandler = () => {
    setShowCart(false)
  }
  return (
    <>
      {showCart && <Cart />}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
