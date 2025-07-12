import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import darkModeStyles from './styles/DarkMode.module.css';

const App = () => {
  // Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // Implement event handler for darkMode
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  
  // Implement state for cart management
  const [cartItems, setCartItems] = useState([]);

  // Implement event handler for addToCart, preventing adding the same item twice
  const handleAddToCart = (product) => {
    setCartItems(prev => {
      if (prev.find(item => item.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  // Implement event handler for removeFromCart 
  const handleRemoveFromCart = (idToRemove) => {
    setCartItems(prev => prev.filter(item => item.id !== idToRemove));
  };

  // Implement state for category based filtering
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Implement event handler for selectedCategory
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  
  return (
     <div className={darkMode ? darkModeStyles.darkMode : ''}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>
      
      <ProductList category={selectedCategory} onAddToCart={handleAddToCart} />

      {/* Implement and render Cart component */}
      <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
    </div>
  )
}

export default App
