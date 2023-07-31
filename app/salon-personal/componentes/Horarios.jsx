import React, { useState, useEffect } from "react";
import dataHorarios from "../data_horarios.json";

export default function Horarios() {
  const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);
  const [horariosUsuario, setHorariosUsuario] = useState([]);

  useEffect(() => {
    // Recuperar el usuario autenticado del localStorage
    const usuarioString = localStorage.getItem("usuarioAutenticado");
    if (usuarioString) {
      const usuarioAutenticado = JSON.parse(usuarioString);
      setUsuarioAutenticado(usuarioAutenticado);
    }
  }, []);

  useEffect(() => {
    // Filtrar los horarios del usuario autenticado cuando el usuario cambie o el componente se monte
    if (usuarioAutenticado) {
      const horariosUsuario = dataHorarios.filter(
        (horario) => horario.usuarios.includes(usuarioAutenticado.username)
      );
      setHorariosUsuario(horariosUsuario);
    }
  }, [usuarioAutenticado]);

  return (
    <div>
      {usuarioAutenticado ? (
        <div>
          <h1>Horarios de {usuarioAutenticado.nombre} {usuarioAutenticado.apellido}</h1>
          {horariosUsuario.length > 0 ? (
            <ul>
              {horariosUsuario.map((horario) => (
                <li key={horario.id}>
                  <strong>Materia:</strong> {horario.materia}, <strong>Día:</strong> {horario.dia}, <strong>Horario:</strong> {horario.horario}
                </li>
              ))}
            </ul>
          ) : (
            <p>No tienes horarios inscritos.</p>
          )}
        </div>
      ) : (
        <p>Debe iniciar sesión para ver los horarios.</p>
      )}
    </div>
  );
}
