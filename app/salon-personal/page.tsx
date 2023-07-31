'use client';
import React, { useState } from "react";
import Layout from "../layout2";
import Botonera from "../componentes/Botonera";
import Horarios from "./componentes/Horarios";
import Calificaciones from "./componentes/Calificaciones";
import "../general/styles.css";



export default function salonPersonal() {
    const pageTitle = "Campus Mágico de Slytherin";
    const [contenedorActivo, setContenedorActivo] = useState<string>("horarios");

    const handleContenedorActivo = (section: string) => {
        setContenedorActivo(section);
      };


    return (
        <Layout pageTitle={pageTitle}>
         <main>
        <div className="campus-contenedor">
          <Botonera
            opciones={["horarios", "calificaciones"]} 
            contenedorActivo={contenedorActivo}
            handleContenedorActivo={handleContenedorActivo}
          />

          {contenedorActivo === "horarios" && 
          <div className="personal-horarios">
            <h3 className='campus-titulos'> Mis Horarios</h3> 
            <p className='campus-descripcion'> </p>
            <Horarios/>
          </div>}

          {contenedorActivo === "calificaciones" && 
          <div className="personal-calificaciones">
            <h3 className='campus-titulos'> Mis Calificaciones</h3> 
            <p className='campus-descripcion'> </p>
            <Calificaciones/>
          </div>}
        </div>
      </main>
    </Layout>
    );
  }