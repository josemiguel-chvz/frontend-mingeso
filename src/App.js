import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import { Container } from 'react-bootstrap';
import Index from './pages/Index';
import Store from './pages/Store';
import { useState } from 'react';
import Checkout from './pages/Checkout';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
      setShowCart(true);
  };

  const closeCart = () => {
      setShowCart(false);
  };

  const addToCart = (order) => {
    // Chequear si empanada con mismo
    // - preparación
    // - tamaño
    // existe en el carrito
    // En caso de existir -> agregar cantidad
    // En caso contrario añadir nueva orden al carrito
    let cartIndex = cart.findIndex(c => (
      c.id === order.id
      && c.size === order.size
      && c.preparation === order.preparation
    ));
    let item = cart[cartIndex];

    if (item) {
      item.qty += order.qty;
      item.price += order.price;
      setCart(cart);
    } else {
      setCart([...cart, order]);
    }
  };

  return (
    <Layout
      cart={cart}
      showCart={showCart}
      openCart={openCart}
      closeCart={closeCart}
    >
      <Container>
        <Routes>
          <Route path='/' element={<Index/>} exact/>
          <Route path='/store' element={<Store addToCart={addToCart}/>} exact />
          <Route path='/checkout' element={<Checkout />} exact />
        </Routes>
      </Container>
    </Layout>
  );
}

export default App;