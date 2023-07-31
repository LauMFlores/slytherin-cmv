// import data from "../data/data_calendario.json";
import '../estilos/trivia.css';
import { useEffect, useState } from "react";

export default function Trivia () {

      
    const [cargando, setCargando]=useState(true);
    const [hechizos, setHechizos]=useState<any[]>([]);

    const [hechizoPregunta, setHechizoPregunta] = useState<any | null>(null);
    const [hechizosOpciones, setHechizosOpciones] = useState<any[]>([]);
    const [mensaje, setMensaje] = useState<string | null>(null);
    const [isFlipped, setIsFlipped] = useState(false);

    const flipTarjeta = () => {
        setIsFlipped(!isFlipped);
      };


    useEffect( ()=> {

        // function getRandomIntInclusive(min: number, max: number) {
        //     min = Math.ceil(min);
        //     max = Math.floor(max);
        //     return Math.floor(Math.random() * (max - min + 1) + min);
        //   }
        
        // const random = (getRandomIntInclusive(1, 72));   
        const endpoint=`https://harry-potter-api.onrender.com/hechizos`;
//---------- fetch con async await-------------------------------

          //funcion anonima guardada en variable
          //con async habilitamos el uso de promesas
        const fetchHechizos= async () => {
            //fetch(endpoint).then((res)=> {
            const res = await fetch (endpoint);
            console.log(res);
            if (res.ok) {
                //res.json().then((data)=>{
                const data = await res.json();
                console.log(data);
                setHechizos (data);
                setCargando(false);
            } else {
                console.error ('Oops,', res.statusText);
            }
        }
          //Llamar a la funcion
          fetchHechizos();

}, [] );

useEffect(() => {
    generarNuevaPregunta();
  }, [hechizos]);

  const generarNuevaPregunta = () => {
    if (hechizos.length > 0) {
      // Escoger un hechizo aleatorio para la pregunta
      const randomIndex = Math.floor(Math.random() * hechizos.length);
      const pregunta = hechizos[randomIndex];
      setHechizoPregunta(pregunta);

      // Obtener otros dos hechizos aleatorios para las opciones
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
      setIsFlipped(false)
    }
  };

  const handleRespuesta = (respuesta: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
  
    if (hechizoPregunta?.uso === respuesta) {
      setMensaje("¡Correcto!");
    } else {
      setMensaje("Respuesta incorrecta, intenta de nuevo.");
    }
  };

if (cargando) {
    return (
        <h2>Cargando Hechizos...</h2>
    )
}


    return (
        <div className='hechizos-contenedor'>
               
                {hechizoPregunta && (
                    <div className={`hechizos-tarjeta ${isFlipped ? "flip" : "cover"}`} onClick={flipTarjeta}>
              <div className={`flip-cara ${isFlipped ? "frente" : "dorso"}`}>

              {isFlipped ? (
              <>
                       <p className='hechizos-respuesta'>¿Cuál de los siguientes hechizos... </p>
                        <p className='hechizos-pregunta'>{hechizoPregunta.uso}?</p>
                        <div className='hechizos-opciones-contenedor'>
                            {hechizosOpciones.map((hechizo) => (
                                <button className='hechizos-botones' key={hechizo.id} onClick={(e) => handleRespuesta(hechizo.uso, e)}>
                            {hechizo.hechizo}
                            </button>
                            ))}
                        </div>
                        {mensaje && <p className='hechizos-respuesta'>{mensaje}</p>}
                    
                       </>
                       ) : ( 
                        <img className="dorso-imagen" src="./hogwarts-logo.png" alt="" />

                     )}
                    </div>

        
                </div>
                )} 

                {isFlipped && (
                <button className='hechizos-nuevo' onClick={generarNuevaPregunta}>Siguiente Tarjeta Mágica</button> )}
            </div>
      
    )
}       









{/* <h1>Lista de Hechizos:</h1>
        {hechizos && hechizos.length > 0 ? (
            
            <ul>
            {hechizos.map((hechizo) => (
              <li key={hechizo.id}>
                <strong>Hechizo:</strong> {hechizo.hechizo} - <strong>Uso:</strong> {hechizo.uso}
              </li>
            ))}
          </ul>
        ) : (
            <p>No se encontraron hechizos.</p>
        )} */}
        
    
            {/* <div>
            <h1>Trivia de Hechizos:</h1>
            {hechizoPregunta && (
                <>
                <p>¿Cuál es el uso del siguiente hechizo?</p>
                <p>{hechizoPregunta.uso}</p>
                <div>
                    {hechizosOpciones.map((hechizo) => (
                    <button key={hechizo.id} onClick={() => handleRespuesta(hechizo.uso)}>
                        {hechizo.hechizo}
                    </button>
                    ))}
                </div>
              
                {mensaje && <p>{mensaje}</p>}
                <button onClick={generarNuevaPregunta}>Generar nueva pregunta</button>
                </>
            )}
            </div> */}