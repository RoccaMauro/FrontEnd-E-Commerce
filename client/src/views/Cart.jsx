import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <div className="page-container">
      <div className="cart-container">
        <h2>Carrito de Compras</h2>
        {cart.length === 0 ? (
          <p>El carrito está vacío.</p>
        ) : (
          <div className="cart-items">
            {cart.map((p, index) => (
              <div key={index} className="cart-item">
                <span className="item-name">{p.name}</span>
                <span className="item-price">${p.price}</span>
                <button onClick={() => removeFromCart(p.id)}>Quitar</button>
              </div>
            ))}
            <h3 className="cart-total">Total: ${total}</h3>
          </div>
        )}
        <Link to="/" className="back-home">Volver al Home</Link>
      </div>
    </div>
  );
}

export default Cart;
