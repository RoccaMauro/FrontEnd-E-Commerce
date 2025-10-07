import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <div className="img-placeholder"></div>
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>
      <div className="button-group">
        <Link to={`/product/${product.id}`}>
          <button className="btn btn-detail">Ver detalle</button>
        </Link>
        <button className="btn btn-cart" onClick={() => addToCart(product)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
