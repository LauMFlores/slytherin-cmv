import React, { useEffect } from "react";
import dataHorarios from "../data_horarios.json";

const materias = [
  "Pociones",
  "Encantamientos",
  "Defensa Contra las Artes Oscuras",
  "Herbología",
  "Transformaciones",
  "Astronomía",
  "Historia de la Magia",
  "Runas Antiguas",
  "Adivinación",
  "Estudio de los Muggles",
  "Cuidado de Criaturas Mágicas"
];

const AsignacionAleatoriaHorarios = ({ onInscripcionCompletada }) => {
  useEffect(() => {
    const horariosDisponibles = dataHorarios.filter((horario) => horario.usuarios.length === 0);

    if (horariosDisponibles.length === 0) {
      console.log("No hay horarios disponibles.");
      return;
    }

    const horariosInscritos = new Set();

    materias.forEach((materia) => {
      const horariosMateria = horariosDisponibles.filter((horario) => horario.materia === materia);

      if (horariosMateria.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * horariosMateria.length);
        const horarioSeleccionado = horariosMateria[indiceAleatorio];

        horarioSeleccionado.usuarios.push("usuarioAutenticado.username");
        horariosInscritos.add(horarioSeleccionado.materia);

        // Eliminar el horario inscrito de la lista de horarios disponibles
        const indiceEliminado = horariosDisponibles.indexOf(horarioSeleccionado);
        if (indiceEliminado !== -1) {
          horariosDisponibles.splice(indiceEliminado, 1);
        }
      }
    });

    // Informamos que la inscripción ha sido completada y enviamos la lista de materias inscritas
    onInscripcionCompletada(Array.from(horariosInscritos));
  }, []);

  return null;
};

export default AsignacionAleatoriaHorarios;
