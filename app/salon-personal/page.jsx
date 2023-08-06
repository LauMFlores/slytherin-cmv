'use client';
import React, { useState, useEffect } from "react";
import Layout from "../layout2";
import Botonera from "../componentes/Botonera";
import Horarios from "./componentes/Horarios";
import Calificaciones from "./componentes/Calificaciones";
import "../general/styles.css";
import "./styles.css";


export default function salonPersonal() {
    const pageTitle = "Mi Salón Personal";
    const [contenedorActivo, setContenedorActivo] = useState("horarios");

    const [usuarioAutenticado, setUsuarioAutenticado] = useState(null);

    const handleContenedorActivo = (section) => {
        setContenedorActivo(section);
    };

 //usuario  del localStorage
    useEffect(() => {
        const usuarioString = localStorage.getItem("usuarioAutenticado");
        if (usuarioString) {
            const usuarioAutenticado = JSON.parse(usuarioString);
            setUsuarioAutenticado(usuarioAutenticado);
        }
    }, []);

  //mayúscula
    const capitalizeFirstLetter = (str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    };

  //switch para poner tipo de estudiante 
    const tipoUsuarioMensaje = () => {
      const usuario = usuarioAutenticado;
      if (!usuario) {
        return null; 
      }
      let mensaje = "";
    
      switch (true) {
        case usuario.quidditch === "cazador" || usuario.quidditch === "bateador" || usuario.quidditch === "buscador":
          const tipoQuidditch = capitalizeFirstLetter(usuario.quidditch);
          mensaje = `🏆 Jugador de Quidditch - ${tipoQuidditch}`;
          break;
        case usuario.prefecto:
          mensaje = "🏅 Prefecto";
          break;
        case usuario.jefe:
          mensaje = "👑 Jefe de Casa";
          break;
        default:
          mensaje = "🎓 Estudiante Regular";
          break;
      }
    
      return <p>{mensaje}</p>;
    };


    return (
        <Layout pageTitle={pageTitle}>
         <main>
          <Botonera
            opciones={["horarios", "calificaciones"]} 
            contenedorActivo={contenedorActivo}
            handleContenedorActivo={handleContenedorActivo}
          />
          <div className="campus-contenedor">
            <div className="personal-bienvenida">
              <img src="./img/puntos-slytherin.png" alt="" />
              <div className="bienvenida-nombre"> {usuarioAutenticado?.nombre} {usuarioAutenticado?.apellido} </div>
              <div className="bienvenida-tipo"> {tipoUsuarioMensaje()} </div>
              <div className="bienvenida-anio"> Año: {usuarioAutenticado?.anio}</div>
            </div>
          <div className="separador"></div>

          {contenedorActivo === "horarios" && 
          <div className="personal-horarios">
            <h3 className='campus-titulos'> Mis Horarios</h3> 
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