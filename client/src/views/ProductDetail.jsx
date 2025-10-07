import React from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetail.css";

const products = [
  { id: 1, name: "Remera", price: 1000, description: "Remera cómoda y casual." },
  { id: 2, name: "Pantalón", price: 2000, description: "Pantalón elegante para todo día." },
  { id: 3, name: "Campera", price: 5000, description: "Campera abrigada de alta calidad." },
  { id: 4, name: "Zapatillas", price: 8000, description: "Zapatillas cómodas y modernas." },
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Producto no encontrado.</p>;

  return (
    <div className="detail-container">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button>Agregar al carrito</button>
      <br />
      <Link to="/">Volver al Home</Link>
    </div>
  );
}

export default ProductDetail;
