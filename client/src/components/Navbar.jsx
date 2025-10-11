import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">AURA</Link>
      </div>

      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/carrito">Carrito</Link>
        <Link to="/contacto">Contacto</Link>
      </div>

      <div className="navbar-actions">
        <input type="text" placeholder="Buscar..." />
        <button>🔍</button>
      </div>
    </nav>
  );
};

export default Navbar;
