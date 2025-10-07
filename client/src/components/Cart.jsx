import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((p, index) => (
            <div key={index} className="cart-item">
              <span>{p.name}</span>
              <span>${p.price}</span>
              <button onClick={() => removeFromCart(p.id)}>Quitar</button>
            </div>
          ))}
          <h3>Total: ${total}</h3>
        </div>
      )}
      <Link to="/">Volver al Home</Link>
    </div>
  );
}

export default Cart;
