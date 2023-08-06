import React, { useState, useEffect } from 'react';
import './estilos/cuentaRegresiva.css';

export default function CuentaRegresiva() {
  const [segundosRestantes, setSegundosRestantes] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fechaInicioEscolar = new Date('2023-09-05T08:00:00');
    const interval = setInterval(() => {
      const ahora = new Date();
      const diferenciaTiempo = fechaInicioEscolar.getTime() - ahora.getTime();
      const segundos = Math.floor(diferenciaTiempo / 1000);

      setSegundosRestantes(segundos);

      if (segundosRestantes > 0) {
        const days = Math.floor(segundosRestantes / 86400);
        const hours = Math.floor((segundosRestantes % 86400) / 3600);
        const minutes = Math.floor((segundosRestantes % 3600) / 60);
        const seconds = segundosRestantes % 60;

        setTimeLeft({ days, hours, minutes, seconds });
        setLoading(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [segundosRestantes]);

  return (
    <div className="cuenta-regresiva-contenedor">
      {loading ? ( 
        <div className="etiqueta">Cargando cuenta regresiva...</div>
      ) : segundosRestantes > 0 ? (
        <div className="cuenta-regresiva">
          <div className="etiqueta">Inicio del Año Escolar en:</div>
          <div className="tiempo">
            <p>
              {timeLeft.days} <br /> Días{' '}
            </p>
            <p>
              {timeLeft.hours}
              <br />
              Horas{' '}
            </p>
            <p>
              {timeLeft.minutes}
              <br />
              Minutos{' '}
            </p>
            <p>
              {timeLeft.seconds}
              <br />
              Segundos{' '}
            </p>
          </div>
        </div>
      ) : (
        <div className="etiqueta">¡El año escolar ha comenzado!</div>
      )}
    </div>
  );
}