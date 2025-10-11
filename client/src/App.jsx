import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./views/Home.jsx";
import Carrito from "./views/Carrito.jsx";
import Contacto from "./views/Contacto.jsx";
import "./App.css";

function App() {
  return (
    <div className="page-container">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
