import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import "./App.css";


const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    const isAlreadyInCart = cart.find((item) => item.id === product.id);
    if (isAlreadyInCart) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  
  return (
    <div className="App">
      <Navbar cartCount={cart.length} toggleModal={toggleModal}  />
      <ProductList products={products} addToCart={addToCart} />
      {isModalOpen && (
        <CartModal
        setCart={setCart}
          cart={cart}
          removeFromCart={removeFromCart}
          toggleModal={toggleModal}
        />
      )}
    </div>
  );
};

export default App;