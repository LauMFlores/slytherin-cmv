'use client';
import React, { useState } from "react";
import data from "../data/data_calendario.json";
import '../estilos/calendario.css';


export default function Calendario () {

 const [filtroActivo, setFiltroActivo] = useState("todos");

  const handleFiltroActivo = (filtro: string) => {
    setFiltroActivo(filtro);
  };

  const tiposEventosUnicos = data.eventos.reduce((tiposUnicos, evento) => {
    if (!tiposUnicos.includes(evento.tipoEvento) && evento.tipoEvento !== "general") {
      tiposUnicos.push(evento.tipoEvento);
    }
    return tiposUnicos;
  }, [] as string[]);

  const eventosFiltrados = data.eventos
    .filter((evento) => filtroActivo === "todos" || evento.tipoEvento === filtroActivo)
    .sort((a, b) => {
        const inicioA = typeof a.fechaISO === "string" ? a.fechaISO : a.fechaISO.inicio;
        const inicioB = typeof b.fechaISO === "string" ? b.fechaISO : b.fechaISO.inicio;
        return inicioA.localeCompare(inicioB);
      });

    const formatoFecha = (fechaISO: string | { inicio: string; fin: string }) => {
        if (typeof fechaISO === "string") {
            // Fecha individual
            const fecha = new Date(fechaISO);
            const formato = new Intl.DateTimeFormat("es-ES", { day: "numeric", month: "long" });
            return formato.format(fecha);
          } else {
            // Rango de fechas
            const inicio = new Date(fechaISO.inicio);
            const fin = new Date(fechaISO.fin);
            const diaInicio = inicio.getDate();
            const mesInicio = inicio.toLocaleString("es-ES", { month: "long" });
            const diaFin = fin.getDate();
            const mesFin = fin.toLocaleString("es-ES", { month: "long" });
            return `${diaInicio} ${mesInicio} - ${diaFin} ${mesFin}`;
          }
        };

        function getClasePorTipoEvento(tipoEvento: string): string {
          switch (tipoEvento) {
            case 'recesos':
              return 'recesos';
            case 'examenes':
              return 'examenes';
            case 'quidditch':
              return 'quidditch';
            case 'hogsmeade':
              return 'hogsmeade';
            case 'general':
              return 'general';
            default:
              return '';
          }
        }
return (
  
  <div className="calendario-contenedor">
    <div className="calendario-filtro">
      <label>
        Todos
          <input type="radio" name="filtros" value="todos"
            checked={filtroActivo === "todos"}
            onChange={() => handleFiltroActivo("todos")}/>
      </label>

      {tiposEventosUnicos.map((tipoEvento) => (
      <label key={tipoEvento}>
        {tipoEvento.charAt(0).toUpperCase() + tipoEvento.slice(1)}
          <input type="radio" name="filtro" value={tipoEvento}
            checked={filtroActivo === tipoEvento}
            onChange={() => handleFiltroActivo(tipoEvento)}/>
      </label>
      ))}
      
    </div>

    <div className="calendario">
        {eventosFiltrados.map((evento) => (
          <div className={`calendario-evento ${getClasePorTipoEvento(evento.tipoEvento)}`}  key={evento.evento}>
            <p className="calendario-nombre">{evento.evento}</p>
            <p className="calendario-fecha">{formatoFecha(evento.fechaISO)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
