import './App.css';
import Header from './components/header/Header';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';
import { useState } from 'react'
import CartProvider from './store/CartProvider';


function App() {
  const [showCart, setShowCart] = useState(false)

  const ShowCartHandler = () => {
    setShowCart(true)
  }

  const HideCartHandler = () => {
    setShowCart(false)
  }
  return (
    <CartProvider>
      {showCart && <Cart onClose={HideCartHandler} />}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
