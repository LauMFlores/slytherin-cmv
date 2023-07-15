import { useState } from "react";
import { useEffect } from 'react';
import './componentesCSS/botonSolicitar.css'


interface BotonSolicitarProps {
    onClick: () => void;
    disabled: boolean
  }
  
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
        <div>
            <button className='boton' onClick={handleClick} disabled={disabled}>
                Accio Item!
            </button> 
            {mensajeCarrito &&
            <p className='mensajeCarrito' > Excelente, una lechuza ya esta en camino!</p>}
           
            
        </div>
    )
}