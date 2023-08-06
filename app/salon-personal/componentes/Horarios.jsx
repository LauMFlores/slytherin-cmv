

import React, { useState, useEffect } from "react";
import dataHorarios from "../data/data_horarios.json";
import "../estilos/horarios.css";

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
        <div className="horarios-contenedor">
          {Object.entries(materiasPorDia).map(([dia, materias]) => (
            <div className="dia-contenedor" key={dia}>
              <p className="dia-titulo">{dia}</p>
              {materias.length > 0 ? (
                <ul className="dia-item-contenedor">
                  {materias.map((materia) => (
                    <li className="dia-item" key={materia.id}>
                      <p className="dia-materia"> {materia.materia}</p> <p className="dia-horario"> {materia.horario}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="dia-item">No cursas materias este día.</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="dia-item" >Debe iniciar sesión para ver los horarios.</p>
      )}
    </div>
  );
}