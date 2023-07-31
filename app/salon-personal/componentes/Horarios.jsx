

import React, { useState, useEffect } from "react";
import dataHorarios from "../data/data_horarios.json";

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

  // Agrupar las materias por día
  const materiasPorDia = {
    Lunes: [],
    Martes: [],
    Miércoles: [],
    Jueves: [],
    Viernes: [],
    Sábado: []
  };

  horariosUsuario.forEach((horario) => {
    materiasPorDia[horario.dia].push(horario);
  });

  // Ordenar los horarios dentro de cada día por hora
  Object.keys(materiasPorDia).forEach((dia) => {
    materiasPorDia[dia].sort((a, b) => {
      const horaA = new Date(`1970-01-01 ${a.horario.split(" - ")[0]}`);
      const horaB = new Date(`1970-01-01 ${b.horario.split(" - ")[0]}`);
      return horaA - horaB;
    });
  });

  return (
    <div>
      {usuarioAutenticado ? (
        <div>
          <h1>Horarios de {usuarioAutenticado.nombre} {usuarioAutenticado.apellido}</h1>
          {Object.entries(materiasPorDia).map(([dia, materias]) => (
            <div key={dia}>
              <h2>{dia}</h2>
              {materias.length > 0 ? (
                <ul>
                  {materias.map((materia) => (
                    <li key={materia.id}>
                      <strong>Materia:</strong> {materia.materia}, <strong>Día:</strong> {materia.dia}, <strong>Horario:</strong> {materia.horario}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No tienes horarios inscritos para este día.</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p>Debe iniciar sesión para ver los horarios.</p>
      )}
    </div>
  );
}