
'use client';
import React, { useState } from "react";
import Layout from "../layout2";
import "./styles.css"; 
import Anuncios from "./componentes/Anuncios";
import Calendario from "./componentes/Calendario";
import Puntos from "./componentes/Puntos";
import Trivia from "./componentes/Trivia";

export default function General() {
  const pageTitle = "Campus Mágico de Slytherin";
  const [contenedorActivo, setContenedorActivo] = useState<"anuncios" | "calendario" | "puntos" | "trivia">("anuncios");

  const handleContenedorActivo = (section: "anuncios" | "calendario" | "puntos" | "trivia") => {
    setContenedorActivo(section);
  };

  return (
    <Layout pageTitle={pageTitle}>
      <main className="campus">
        <h3></h3>
        <div className="general-contenedor">
          <div className="general-botonera">
            <button onClick={() => handleContenedorActivo("anuncios")}>Anuncios</button>
            <button onClick={() => handleContenedorActivo("calendario")}>Calendario</button>
            <button onClick={() => handleContenedorActivo("puntos")}>Puntos</button>
            <button onClick={() => handleContenedorActivo("trivia")}>Trivia</button>
          </div>
          {contenedorActivo === "anuncios" && <div className="general-anuncios"><Anuncios/></div>}
          {contenedorActivo === "calendario" && <div className="general-calendario"><Calendario/></div>}
          {contenedorActivo === "puntos" && <div className="general-puntos"><Puntos/></div>}
          {contenedorActivo === "trivia" && <div className="general-trivia"><Trivia/></div>}
        </div>
      </main>
    </Layout>
  );
}