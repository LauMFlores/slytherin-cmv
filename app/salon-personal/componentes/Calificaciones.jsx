

import React, { useState, useEffect } from "react";
import dataUsuarios from "../../data_usuarios.json";

export default function Calificaciones() {
    const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);
  
    useEffect(() => {
      // Recuperar el usuario autenticado del LocalStorage al cargar la página
      const usuarioString = localStorage.getItem("usuarioAutenticado");
      if (usuarioString) {
        const usuarioAutenticado = JSON.parse(usuarioString);
        setUsuarioAutenticado(usuarioAutenticado);
      }
    }, []);
  
    // Función para obtener las calificaciones del usuario autenticado desde el JSON
    const obtenerCalificacionesUsuario = () => {
      if (usuarioAutenticado) {
        const usuarioEncontrado = dataUsuarios.find((usuario) => usuario.username === usuarioAutenticado.username);
        return usuarioEncontrado ? usuarioEncontrado.calificaciones[0] : null;
      }
      return null;
    };
  
    const calificacionesUsuario = obtenerCalificacionesUsuario();
  
    return (
      <div>
        {usuarioAutenticado ? (
          <div>
            <h1>Calificaciones de {usuarioAutenticado.nombre} {usuarioAutenticado.apellido}</h1>
            <ul>
              {Object.entries(calificacionesUsuario).map(([materia, calificacion], index) => (
                <li key={index}>
                  <strong>{materia}:</strong> {calificacion || "Aún no ha rendido ningún examen"}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p>Debe iniciar sesión para ver las calificaciones.</p>
        )}
      </div>
    );
  }