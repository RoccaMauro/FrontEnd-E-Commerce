import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <div>
        <Link to={`/product/${product.id}`}>
          <button>Ver detalle</button>
        </Link>
        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
      </div>
    </div>
  );
}

export default ProductCard;
