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

return (
  <div>
    <h3>CALENDARIO ACADÉMICO {data.anio}</h3>

    <div>
      <label>
        Todos
        <input
          type="radio"
          name="filter"
          value="todos"
          checked={filtroActivo === "todos"}
          onChange={() => handleFiltroActivo("todos")}
        />
      </label>

      {tiposEventosUnicos.map((tipoEvento) => (
        <label key={tipoEvento}>
          {tipoEvento.charAt(0).toUpperCase() + tipoEvento.slice(1)}
          <input
            type="radio"
            name="filter"
            value={tipoEvento}
            checked={filtroActivo === tipoEvento}
            onChange={() => handleFiltroActivo(tipoEvento)}
          />
        </label>
      ))}
    </div>

    <div>
        {eventosFiltrados.map((evento) => (
          <div key={evento.evento}>
            <h4>{evento.evento}</h4>
            <p>{formatoFecha(evento.fechaISO)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
