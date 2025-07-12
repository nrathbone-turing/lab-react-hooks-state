import React from 'react'
import ProductCard from './ProductCard'

// Sample product data (for display purposes only)
export const sampleProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false }
]

const ProductList = ({ category,onAddToCart}) => {
  const filteredProducts = category === 'all'
    ? sampleProducts
    : sampleProducts.filter(p => p.category === category);
  
    return (
    <div>
      <h2>Available Products</h2>
        {/* Filter sample data using selected category */}
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
    </div>
  )
}

export default ProductList
