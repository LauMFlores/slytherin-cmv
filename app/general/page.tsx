'use client';
import { useState } from "react";
import Layout from "../layout2";
import Botonera from "../componentes/Botonera";
import Anuncios from "./componentes/Anuncios";
import Calendario from "./componentes/Calendario";
import Puntos from "./componentes/Puntos";
import Trivia from "./componentes/Trivia";
import CuentaRegresiva from "../componentes/CuentaRegresiva";
import data from "./data/data_calendario.json";
import "./styles.css"; 

export default function General() {
  const pageTitle = "Campus Mágico de Slytherin";
  const [contenedorActivo, setContenedorActivo] = useState<string>("anuncios");

  const handleContenedorActivo = (section: string) => {
    setContenedorActivo(section);
  };

  return (
    <Layout pageTitle={pageTitle}>
      <main className="campus">
        <div className="campus-contenedor">

          <CuentaRegresiva/>
      
        
        <Botonera
            opciones={["anuncios", "calendario", "puntos","hechizos"]} 
            contenedorActivo={contenedorActivo}
            handleContenedorActivo={handleContenedorActivo}
          />
          {contenedorActivo === "anuncios" && 
            <div className="general-anuncios">
                <h3 className='campus-titulos'> Tablón de Anuncios</h3> 
                <p className='campus-descripcion'> Las notificaciones aquí debajo se actualizan todos los lunes. No olvide revisarlas para estar al tanto de cualquier novedad. </p>
                <Anuncios/>
            </div>}
          {contenedorActivo === "calendario" && 
            <div className="general-calendario">
                <h3 className='campus-titulos'>Calendario Académico {data.anio}</h3>
                <p className='campus-descripcion'> Fechas y eventos importantes del año en curso.  </p>
                <Calendario/>
            </div>}
          {contenedorActivo === "puntos" && 
            <div className="general-puntos">
                <h3 className='campus-titulos'>Copa de las Casas</h3> 
                <p className='campus-descripcion'>Seguimiento de la puntuación de la Copa de las Casas.</p>
                <Puntos/>
            </div>}
          {contenedorActivo === "hechizos" && 
            <div className="general-hechizos">
                <h3 className='campus-titulos'>Hechizos</h3> 
                <p className='campus-descripcion'>Puede practicar regularmente su conocimiento de hechizos aquí y estar siempre preparado para cualquier examen sorpresa. <br/> Cuando esté listo, aprete la tarjeta mágica para ver su contenido y seleccione la opción que cree correcta.</p>
                <Trivia/>
            </div>}
        </div>
      </main>
    </Layout>
  );
}