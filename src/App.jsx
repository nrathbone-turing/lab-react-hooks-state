import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  // Implement state for dark mode toggle
  const [darkMode, setDarkMode] = useState(false);

  // TODO: Implement state for cart management

  // TODO: Implement state for category filtering

  return (
    <div>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      {/* Render DarkModeToggle and implement dark mode functionality */}
      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      
      {/* TODO: Implement category filter dropdown */}
      <label>Filter by Category: </label>
      <select>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList />

      {/* TODO: Implement and render Cart component */}
    </div>
  )
}

export default App
