import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1>Mi Tienda</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Carrito ({cartCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
