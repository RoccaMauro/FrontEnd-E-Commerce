import React from "react";
import ProductCard from "../components/ProductCard";
import "./Home.css";

const products = [
  { id: 1, name: "Remera Oversize", price: 1000 },
  { id: 2, name: "Pantalón Cargo", price: 2000 },
  { id: 3, name: "Campera Bomber", price: 5000 },
  { id: 4, name: "Zapatillas Urbanas", price: 8000 },
  { id: 5, name: "Buzo Hoodie", price: 4500 },
  { id: 6, name: "Camisa Denim", price: 3000 },
];

function Home({ addToCart }) {
  return (
    <div className="page-container">
      <div className="home-container">
        <h2>🛍️ Productos Destacados</h2>
        <p className="subtitle">Moda urbana y estilo para todos los días</p>
        <div className="products-grid">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
