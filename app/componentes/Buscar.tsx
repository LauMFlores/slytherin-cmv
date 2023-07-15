import React, { useState } from "react";

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
    
    function Limpiar(){
      return(
        setBusqueda("")
      )
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={busqueda}
          onChange={handleInputChange}
          placeholder="Buscar productos..."
        />
        <button type="submit">Buscar</button>
        <button onClick={Limpiar}type="reset">Limpiar</button>
      </form>
      
    );
}