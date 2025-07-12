import React from 'react'

const Cart = ({ cartItems,onRemoveFromCart }) => {
  // Bonus challenge for Cart total
  const totalItems = cartItems.length;

  // Parse and sum the numeric prices of items
  const totalCost = cartItems.reduce((sum, item) => {
    const numericPrice = parseFloat(item.price.replace('$', ''));
    return sum + numericPrice;
  }, 0).toFixed(2);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {/* Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} is in your cart.
            <button onClick={() => onRemoveFromCart(item.id)}
              style={{ marginLeft: '0.5rem' }}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div style={{ marginTop: '1rem' }}>
        <p>Total items: {totalItems}</p>
        <p>Total cost: ${totalCost}</p>
      </div>
    </div>
  )
}

export default Cart
