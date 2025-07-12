import React from 'react'

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {/* Include items here in li tags with text 'ITEM.NAME is in your cart.' */}
      <ul>
      {cartItems.map(item => (
        <li key={item.id}>{item.name} is in your cart.</li>
      ))}
    </ul>
    {/* Bonus challenge for cart total */}
    <p>Total items: {cartItems.length}</p>
    </div>
  )
}

export default Cart
