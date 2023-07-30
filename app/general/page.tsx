
'use client';
import React, { useState } from "react";
import Layout from "../layout2";
import "./styles.css"; 
import Anuncios from "./componentes/Anuncios";
import Calendario from "./componentes/Calendario";
import Puntos from "./componentes/Puntos";
import Trivia from "./componentes/Trivia";
import data from "./data/data_calendario.json";

export default function General() {
  const pageTitle = "Campus Mágico de Slytherin";
  const [contenedorActivo, setContenedorActivo] = useState<"anuncios" | "calendario" | "puntos" | "hechizos">("anuncios");

  const handleContenedorActivo = (section: "anuncios" | "calendario" | "puntos" | "hechizos") => {
    setContenedorActivo(section);
  };

  return (
    <Layout pageTitle={pageTitle}>
      <main className="campus">
        <div className="general-contenedor">
          <div className="general-botonera">
            <button onClick={() => handleContenedorActivo("anuncios")}>Anuncios</button>
            <button onClick={() => handleContenedorActivo("calendario")}>Calendario</button>
            <button onClick={() => handleContenedorActivo("puntos")}>Puntos</button>
            <button onClick={() => handleContenedorActivo("hechizos")}>Hechizos</button>
          </div>
          {contenedorActivo === "anuncios" && 
            <div className="general-anuncios">
                <h3 className='general-titulos'> Tablón de Anuncios</h3> 
                <p className='general-descripcion'> Las notificaciones aquí debajo se actualizan todos los lunes. No olvide revisarlas para estar al tanto de cualquier novedad. </p>
                <Anuncios/>
            </div>}
          {contenedorActivo === "calendario" && 
            <div className="general-calendario">
                <h3 className='general-titulos'>Calendario Académico {data.anio}</h3>
                <p className='general-descripcion'> Fechas y eventos importantes del año en curso.  </p>
                <Calendario/>
            </div>}
          {contenedorActivo === "puntos" && 
            <div className="general-puntos">
                <h3 className='general-titulos'>Copa de las Casas</h3> 
                <p className='general-descripcion'>Seguimiento de la puntuación de la copa de las casas.</p>
                <Puntos/>
            </div>}
          {contenedorActivo === "hechizos" && 
            <div className="general-trivia">
                <h3 className='general-titulos'>Hechizos</h3> 
                <p className='general-descripcion'>Trivia</p>
                <Trivia/>
            </div>}
        </div>
      </main>
    </Layout>
  );
}