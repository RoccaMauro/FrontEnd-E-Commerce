import React from "react";
import "./Contacto.css";

export default function Contacto() {
  return (
    <div className="contacto-page">
      <div className="contacto-content">
        <h1>Contáctanos</h1>
        <p>
          Si tenés dudas o querés más información sobre nuestros productos,
          completá el siguiente formulario. ¡Te responderemos a la brevedad!
        </p>

        <form className="contacto-form">
          <div className="form-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" placeholder="Tu nombre" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="tuemail@ejemplo.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje"
              rows="5"
              placeholder="Escribí tu mensaje..."
              required
            ></textarea>
          </div>

          <button type="submit" className="enviar-btn">
            Enviar mensaje
          </button>
        </form>
      </div>
    </div>
  );
}
