import React from "react";
import ProductCard from "../components/ProductCard";
import "./Home.css";

const products = [
  { id: 1, name: "Remera", price: 1000 },
  { id: 2, name: "Pantalón", price: 2000 },
  { id: 3, name: "Campera", price: 5000 },
  { id: 4, name: "Zapatillas", price: 8000 },
];

function Home({ addToCart }) {
  return (
    <div className="home-container">
      <h2>Productos Destacados</h2>
      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default Home;
