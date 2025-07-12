import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // Implement event handler for darkMode
  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };
  
  // Implement state for cart management
  const [cartItems, setCartItems] = useState([]);

  // Implement event handler for addToCart
  const handleAddToCart = (product) => {
    setCartItems(prev => [...prev, product]);
  }

  // Implement state for category based filtering
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Implement event handler for selectedCategory
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };
  
  return (
    <div>
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
      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App
