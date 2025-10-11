import React from "react";
import "./Home.css";

const Home = () => {
  const products = [
    { id: 1, name: "Campera Premium", price: "$45.000", image: "https://via.placeholder.com/250x300" },
    { id: 2, name: "Camisa Elegante", price: "$28.000", image: "https://via.placeholder.com/250x300" },
    { id: 3, name: "Pantalón Clásico", price: "$32.000", image: "https://via.placeholder.com/250x300" },
    { id: 4, name: "Blazer Formal", price: "$55.000", image: "https://via.placeholder.com/250x300" },
  ];

  return (
    <div className="home-container">
      <h1 className="title">Colección Exclusiva 2025</h1>
      <div className="product-grid">
        {products.map((p) => (
          <div key={p.id} className="product-card">
            <img src={p.image} alt={p.name} />
            <h2>{p.name}</h2>
            <p>{p.price}</p>
            <button>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
