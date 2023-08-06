import React from 'react';
import Countdown from 'react-countdown';
import './estilos/cuentaRegresiva.css';

export default function CuentaRegresiva() {
  const fechaInicioEscolar = new Date('2023-09-05T08:00:00'); // Fecha de inicio

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <div className="etiqueta">¡El año escolar ha comenzado!</div>;
    }

    return (
      <div className="cuenta-regresiva">
        <div className="etiqueta">
          Inicio del Año Escolar en:
        </div>
        <div className="tiempo">
          <p>{days} <br/> Días </p> 
          <p>{hours}<br/>Horas </p> 
          <p>{minutes}<br/> Minutos </p>  
          <p>{seconds}<br/> Segundos </p>
        </div>
      </div>
    );
  };

  return (
    <div className="cuenta-regresiva-container">
      <Countdown date={fechaInicioEscolar} renderer={renderer} />
    </div>
  );
}