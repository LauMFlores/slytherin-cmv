'use client';
import React, { useState } from 'react';
import '../../interfaces/interface';
import '../estilos/contador.css';

export default function Contador(props: ContadorProps) {

    const [cantidad, setCantidad] = useState(0);
    const precioTotal=cantidad*props.precioUnitario;

    const handleSumar = () => {
      setCantidad(cantidad + 1);
      props.onCantidadChange(cantidad + 1);
    };
  
    const handleRestar = () => {
      if (cantidad > 0) {
        setCantidad(cantidad - 1);
        props.onCantidadChange(cantidad - 1);
      }
    };
  
    return (
      <div className="contador">
        <button onClick={handleRestar}  className='boton-restar'>-</button>
        <p className="cantidad">{cantidad}</p>
        <button onClick={handleSumar} className='boton-sumar'>+</button>
        <p className='precio-total'>${precioTotal}</p>
      </div>
    );
  }