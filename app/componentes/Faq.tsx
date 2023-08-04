'use client'
import Link from 'next/link';
import './estilos/faq.css';
import React, {useState} from "react";

export default function Faq(){

  const [ocultarParrafos, setOcultarParrafos] = useState<{ [key: string]: boolean }>({
    parrafo1: true,
    parrafo2: true,
    parrafo3: true
  });
    
  const toggleParrafo = (parrafo:string) => {
      setOcultarParrafos((prevParrafos) => ({
      ...prevParrafos,
      [parrafo]: !prevParrafos[parrafo]
    }));
  };

    return (
      <div className='faq-contenedor' >
        <p onClick={() => toggleParrafo('parrafo1')} className='faq-pregunta'>¿Qué es mi Identificación Estudiantil Mágica o IEM? 
          {ocultarParrafos.parrafo1 
          ? <span> ▼</span> 
          : <span> ▲</span>} </p>
          {ocultarParrafos.parrafo1 
          ? null 
          : <div className='faq-respuesta' > 
                <p className='revelio'>REVELIO!</p> 
                <p className='faq-respuesta-texto'>Cuando un nuevo alumno es aceptado en Hogwarts, se le asigna automáticamente un número de identificación única por estudiante, denominado IEM. Podés pensarlo como tu TIM - Tarjeta de identificación Mágica - en el mundo mágico, o DNI -Documento Nacional de Identidad- en el mundo muggle</p>
            </div>}
            
        <p onClick={() => toggleParrafo('parrafo2')} className='faq-pregunta'>¿Dónde encuentro mi IEM? 
          {ocultarParrafos.parrafo2 ? <span> ▼</span> : <span> ▲</span>}</p>
          {ocultarParrafos.parrafo2 
          ? null 
          : <div className='faq-respuesta' >
                <p className='revelio'>REVELIO!</p>    
                <p className='faq-respuesta-texto'>Se encuentra detallado en su carta de admisión a Hogwarts. Más específicamente aquí: 
                <Link className='faq-respuesta-link' href="IEM-ejemplo.pdf" target="_blank"><span className='faq-respuesta-icon'>📜</span>Carta</Link> </p> 
            </div>}

        <p onClick={() => toggleParrafo('parrafo3')} className='faq-pregunta'>¿Cuál es mi contraseña? 
          {ocultarParrafos.parrafo3 ? <span> ▼</span> : <span> ▲</span>}</p>
          {ocultarParrafos.parrafo3 
          ? null 
          : <div className='faq-respuesta' > 
                <p className='revelio'>REVELIO!</p>
                <p className='faq-respuesta-texto' >Recuerde que su contraseña para el CMV es la misma que utiliza para la sala común. Recuerde también que ésta irá variando a lo largo del año, pero no se preocupe... nos aseguraremos de que los cambios de contraseña siempre lo encuentren.</p>
          </div>}   
      </div> 

    )
}