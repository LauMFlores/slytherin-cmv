import React from "react";
import '../estilos/botonera.css';

interface BotoneraProps {
  opciones: string[];
  contenedorActivo: string;
  handleContenedorActivo: (section: string) => void;
}

export default function Botonera({ opciones, contenedorActivo, handleContenedorActivo }: BotoneraProps) {


    function comienzoMayuscula(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
      }
  return (
    <div className="general-botonera">
      {opciones.map((opcion) => (
        <button key={opcion} onClick={() => handleContenedorActivo(opcion)}>{comienzoMayuscula(opcion)}
        </button>
      ))}
    </div>
  );
}