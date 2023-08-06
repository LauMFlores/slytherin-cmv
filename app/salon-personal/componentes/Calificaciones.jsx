import React, { useState, useEffect } from "react";
import dataUsuarios from "../../data_usuarios.json";
import "../estilos/calificaciones.css";

export default function Calificaciones() {
    const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);

  //usuario localStorage 
    useEffect(() => {
      const usuarioString = localStorage.getItem("usuarioAutenticado");
      if (usuarioString) {
        const usuarioAutenticado = JSON.parse(usuarioString);
        setUsuarioAutenticado(usuarioAutenticado);
      }
    }, []);
  
    // Calificaciones del usuario
    const obtenerCalificacionesUsuario = () => {
      if (usuarioAutenticado) {
        const usuarioEncontrado = dataUsuarios.find((usuario) => usuario.username === usuarioAutenticado.username);
        return usuarioEncontrado ? usuarioEncontrado.calificaciones[0] : null;
      }
      return null;
    };
  
    const calificacionesUsuario = obtenerCalificacionesUsuario();
  
    return (
      <>
        <div>
          {usuarioAutenticado ? (
            <div className="calificaciones-contenedor">
              <ul className="calificaciones-item-contenedor">
                {Object.entries(calificacionesUsuario).map(([materia, calificacion], index) => (
                  <li className="calificaciones-item" key={index}>
                    <p className="calificaciones-materia">{materia}:</p> <p className="calificaciones-nota"> {calificacion || "Aún no ha rendido examen"}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="calificaciones-item" >Debe iniciar sesión para ver las calificaciones.</p>
          )}
        </div>
        <div className="anexo-notas">
            <h4>Guía de Notas Mágicas</h4>
            <p>O - Sobresaliente</p>
            <p>E - Excede Expectativas</p>
            <p>A - Aceptable</p>
            <p>P - Pobre </p>
            <p>D - Deficiente</p>
            <p>T - Troll</p>
        </div>
      </>
    );
  }