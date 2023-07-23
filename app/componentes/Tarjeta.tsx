'use client';
import React, { useState } from 'react';
import BotonSolicitar from './BotonSolicitar';
import './componentesCSS/tarjeta.css'
import Contador from './Contador';


export default function Tarjeta (props: {
  producto: any; 
  agregarProductoEnCamino: (producto: any ) => void;}
  ) 
  
  {
  const { producto, agregarProductoEnCamino } = props;
  const [cantidad, setCantidad] = useState(0);
  

    const precioFinal= props.producto.precio*props.producto.descuento
    const descuentoPorcentual= (1-props.producto.descuento)*100

  
  
    const handleSolicitar = () => {
      if (cantidad > 0) {
      const productoConCantidad = {
        ...producto,
        cantidad: cantidad,
      };
      agregarProductoEnCamino(productoConCantidad);
    } 
  };

  return (
    <div className="tarjeta">
      <div className="tarjeta-imagen-contenedor">
        <img className='tarjeta-imagen'src={props.producto.imagen} alt=''></img>
        <h3 className='tarjeta-nombre'>{props.producto.nombre}</h3>
      </div>
      <p className='tarjeta-descripcion'>{props.producto.descripcion}</p>
        
        
        <div className="tarjeta-precio-contenedor">
            {props.producto.descuento !== 1?
                    <>
                    <p className='tarjeta-precio'>$ {props.producto.precio} Galeones</p>
                    <p className='tarjeta-descuento'> {Math.round(descuentoPorcentual)}% OFF!</p>
                    <p className='tarjeta-precio-final'>${precioFinal} Galeones</p>
                    </> 
                  : <p className='tarjeta-precio-final'>${precioFinal} Galeones</p>
            }
        </div>
      <Contador precioUnitario={precioFinal} onCantidadChange={setCantidad} /> 
      {cantidad===0? (
      <>
         <p className='contador-mensaje'> ¿Cuántos necesitás, Joven Slytherin?</p>
        <BotonSolicitar onClick={handleSolicitar} disabled={true}/> 
        </> 
      ) : (
      <BotonSolicitar onClick={handleSolicitar} disabled={false}/> 
        )}
    </div>
 )
}