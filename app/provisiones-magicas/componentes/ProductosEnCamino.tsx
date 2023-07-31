'use client';
import '../estilos/productosEnCamino.css';
import React, { useState } from "react";

interface ProductosEnCaminoProps {
    productos: any[];
    cantidadItems: number;
    onEliminarProducto: (productoIndex: number) => void;
  }
  
  export default function ProductosEnCamino({ productos, cantidadItems, onEliminarProducto }: ProductosEnCaminoProps) {

    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
    const [productoIndex, setProductoIndex] = useState(-1);
  
    let importe = productos.reduce((total, producto) => {
        return total + producto.precio * producto.cantidad;
      }, 0);

    const handleEliminarProducto = (index: number) => {
      setProductoIndex(index);
      setMostrarConfirmacion(true);
    }

    const handleConfirmarCancelarLechuza = (productoIndex: number) => {
      setMostrarConfirmacion(false);
      if (productoIndex !== -1) {
          onEliminarProducto(productoIndex);
          setProductoIndex(-1);
      }
    };

    const handleCancelarCancelarLechuza = () => {
      setMostrarConfirmacion(false);
      setProductoIndex(-1);
    };

    return (
      
        <div className={`lechuzas ${mostrarConfirmacion ? 'overflow-oculto' : ''}`}>
            <p className="lechuzas-info">Cantidad de lechuzas en viaje: <p className="lechuzas-total">{productos.length}</p></p>
            <p className="lechuzas-info">Cantidad total de ítems solicitados: <p className="lechuzas-total">{cantidadItems}</p> </p>
            <p className="lechuzas-info">Importe a debitar de su cuenta en Gringotts: <p className="lechuzas-total">${importe} Galeones</p> </p>
            <p className="lechuzas-info">Paquetes en cada lechuza:
                <ul className="lechuzas-total-paquetes"> 
                    {productos.map((producto, index) => (
                        <li key={producto.id}>
                            <p>{producto.nombre} x{producto.cantidad} <p>(${producto.precio * producto.cantidad} Galeones)</p></p>
                            <button
                                 onClick={() => handleEliminarProducto(index)}> Cancelar Lechuza
                            </button>

                {mostrarConfirmacion && (
                  <div className='lechuzas-confirmacion'>
                      <p className='lechuzas-confirmacion-p1'>¿Está seguro que desea cancelar esta lechuza?</p>
                      <p className='lechuzas-confirmacion-p2'>{producto.nombre} x{producto.cantidad}</p>
                      <p className='lechuzas-confirmacion-p3'> El paquete volverá a la tienda y se le devolverá el dinero a su cuenta de Gringotts</p>
                      <div className='lechuzas-confirmacion-botones' >
                        <button onClick={() => handleConfirmarCancelarLechuza(productoIndex)}>Confirmar</button>
                        <button onClick={handleCancelarCancelarLechuza}>Cancelar</button>
                      </div>
                  </div>
                )}

                        </li>
                    ))}

                    { (productos.length === 0 &&
                      <p className="lechuzas-total">Sin pedidos</p>
                    )}
                </ul> 
            </p>
        </div>
       
    );
  }