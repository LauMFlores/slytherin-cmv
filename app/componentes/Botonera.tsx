import React from "react";
import './estilos/botonera.css';
import '../interfaces/interface';

export default function Botonera({ opciones, contenedorActivo, handleContenedorActivo }: BotoneraProps) {

    function comienzoMayuscula (str: string): string {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

      return (
        <div className="general-botonera">
          {opciones.map((opcion) => (
            <button key={opcion} onClick={() => handleContenedorActivo(opcion)}>
              {comienzoMayuscula(opcion)}
            </button>
          ))}
        </div>
      );
}