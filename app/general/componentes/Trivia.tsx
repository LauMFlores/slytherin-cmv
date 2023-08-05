import { useEffect, useState } from "react";
import '../estilos/trivia.css';

export default function Trivia () {

  const [cargando, setCargando]=useState(true);
  const [hechizos, setHechizos]=useState<any[]>([]);

  const [hechizoPregunta, setHechizoPregunta] = useState<any | null>(null);
  const [agregarPalabra, setAgregarPalabra] = useState(false);

  const [hechizosOpciones, setHechizosOpciones] = useState<any[]>([]);
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [respuestaCorrecta, setRespuestaCorrecta] = useState(false);
  const [respuestaIncorrecta, setRespuestaIncorrecta] = useState(false);

  const flipTarjeta = () => {
    setIsFlipped(!isFlipped);
  };


  //fetch api
  useEffect( ()=> {  
      const endpoint=`https://harry-potter-api.onrender.com/hechizos`;

      const fetchHechizos= async () => { 
          const res = await fetch (endpoint);
          console.log(res);
          if (res.ok) {
              const data = await res.json();
              console.log(data);
              setHechizos (data);
              setCargando(false);
          } else {
              console.error ('Oops,', res.statusText);
          }
      };

      fetchHechizos();
  }, [] );


  //preguntas
  useEffect(() => {
      generarNuevaPregunta();
  }, [hechizos]);

  //revisa primera palabra para que quede mejor formulado
  // const hechizoPrimerPalabra = (hechizo: string) => {
  //   const primeraPalabra = ["Encanto", "Maldición", "Revelar", "Hechizo", "La", "Objetivo", "Hacer"];
  //   const primeraPalabraMiniscula = hechizo.split(" ")[0];
  //   return primeraPalabra.includes(primeraPalabraMiniscula);
  // };

  
  const generarNuevaPregunta = () => {
    if (hechizos.length > 0) {
      // hechizo aleatorio
      const randomIndex = Math.floor(Math.random() * hechizos.length);
      const pregunta = hechizos[randomIndex];
      setHechizoPregunta(pregunta);

      //revisa primera palabra para que quede mejor formulado
      const primeraPalabra = pregunta.uso.split(" ")[0];
      const palabrasBuscadas = ["Encanto", "Maldicion", "Revelar", "Objetivo", "Hechizo", "La", "Hacer"];
      setAgregarPalabra(palabrasBuscadas.includes(primeraPalabra));
     
      // opciones adicionales
      const hechizosRestantes = hechizos.filter((hechizo) => hechizo !== pregunta);
      const opciones = [];
      for (let i = 0; i < 2; i++) {
        const randomIndex = Math.floor(Math.random() * hechizosRestantes.length);
        const opcion = hechizosRestantes[randomIndex];
        opciones.push(opcion);
        hechizosRestantes.splice(randomIndex, 1);
      }
      opciones.push(pregunta);
      opciones.sort(() => Math.random() - 0.5);

      setHechizosOpciones(opciones);
      setMensaje(null);
      setIsFlipped(false);
      setRespuestaCorrecta(false);
      setRespuestaIncorrecta(false);
    }
  };


  //manejo del clik y respuesta
  const handleRespuesta = (respuesta: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (hechizoPregunta?.uso === respuesta) {
      setMensaje("¡Correcto!");
      setRespuestaIncorrecta(false)
      setRespuestaCorrecta(true);
      
    } else {
      setMensaje("Hechizo Incorrecto");
      setRespuestaCorrecta(false);
      setRespuestaIncorrecta(true)
    }
  };

  //mensaje mientras carga
  if (cargando) {
      return (
        <div className="cargando">
          <p> Cargando Hechizos...Espere por favor.</p> 
          <p> Puede demorar varios minutos.</p>
          <div className="cargando-animacion">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )
  }


    return (
        <div className='hechizos-contenedor'>
            {hechizoPregunta && (
            <div className={`hechizos-tarjeta ${isFlipped ? "flip" : "cover"} `} onClick={flipTarjeta}>
              <div className={`flip-cara ${isFlipped ? "frente" : "dorso"} ${isFlipped && respuestaCorrecta ? "tarjeta-exito" : ""} ${isFlipped && respuestaIncorrecta ? "tarjeta-error" : ""}`}>
              {isFlipped ? (
                  <>
                    <p className='hechizos-respuesta'>¿Cuál de los siguientes hechizos{agregarPalabra ? " da como resultado" : ""}...</p>
                    <p className='hechizos-pregunta'>{hechizoPregunta.uso}?</p>
                    <div className='hechizos-opciones-contenedor'>
                        {hechizosOpciones.map((hechizo) => (
                        <button className='hechizos-botones' key={hechizo.id} onClick={(e) => handleRespuesta(hechizo.uso, e)}>
                            {hechizo.hechizo}
                        </button>
                        ))}
                    </div>
                    {mensaje && <p className={`hechizos-respuesta ${respuestaCorrecta ? "mensaje-exito" : ""} ${respuestaIncorrecta ? "mensaje-error" : ""}`}>{mensaje}</p>}
                  </>
              ) : ( 
                  <img className="dorso-imagen" src="./img/hogwarts-logo.png" alt="logo de Hogwarts" />
              )}
              </div>
           </div>
            )} 

            {isFlipped && (
                <button className='hechizos-nuevo' onClick={generarNuevaPregunta}>
                  Siguiente Tarjeta Mágica
                </button> )}
            </div>
    )
}       