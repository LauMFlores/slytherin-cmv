import React, { useState } from "react";
import './componentesCSS/buscar.css'

interface BuscarProps {
  onBuscar: (termino: string) => void;
}

export default function Buscar( { onBuscar }: BuscarProps) {

    const [busqueda, setBusqueda] = useState("");
  

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setBusqueda(event.target.value);
      };
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onBuscar(busqueda);

    };
    
    const handleLimpiar = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      setBusqueda(""); 
      onBuscar("");
    };

    return (
      <form className='buscar-contenedor' onSubmit={handleSubmit }>
        <input onClick={(event) => event.stopPropagation()}
          type="text"
          value={busqueda}
          onChange={handleInputChange}
          placeholder="Buscar provisón mágica"
        />
        <button className='buscar-boton' type="submit" onClick={(event) => event.stopPropagation()}>Buscar</button>
        <button className='buscar-boton limpiar' onClick={handleLimpiar} type="button" >Limpiar</button>
      </form>
      
    );
}