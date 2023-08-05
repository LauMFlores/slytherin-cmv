import { useState, useEffect } from "react";
import '../../interfaces/interface';
import '../estilos/botonSolicitar.css'
  
export default function BotonSolicitar(props: BotonSolicitarProps) {
    
    const { onClick, disabled } = props;

    const [mensajeCarrito, setMensajeCarrito]=useState(false)
   
    const handleClick = () => {
        setMensajeCarrito(true);
        props.onClick();
      };

    useEffect(() => {
        const timer = setTimeout(() => setMensajeCarrito(false), 3200);
            return () => clearTimeout(timer);
          }, [mensajeCarrito]);
        
    return (
        <div className='solicitar-contenedor' >
            <button className='solicitar-boton' onClick={handleClick} disabled={disabled}>
                Accio Item!
            </button> 
            {mensajeCarrito &&
            <p className='mensaje-carrito' >Excelente, una lechuza ya está en camino! 🦉</p>}  
        </div>
    )
}