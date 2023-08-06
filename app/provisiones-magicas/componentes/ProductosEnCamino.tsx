'use client';
import { useState } from "react";
import '../../interfaces/interface';
import '../estilos/productosEnCamino.css';

  
export default function ProductosEnCamino({ productos, cantidadItems, onEliminarProducto }: ProductosEnCaminoProps) {

  const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  const [productoIndex, setProductoIndex] = useState(-1);
  
  let importe = productos.reduce((total, producto) => {
     return total + producto.precio * producto.cantidad;
  }, 0);


  //eliminar productos y reconfirmación
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
            <p className="lechuzas-info">Cantidad de lechuzas en viaje: </p> 
            <p className="lechuzas-total">{productos.length}</p>
            <p className="lechuzas-info">Cantidad total de ítems solicitados: </p>
            <p className="lechuzas-total">{cantidadItems} </p> 
            <p className="lechuzas-info">Importe a debitar de su cuenta en Gringotts: </p> 
            <p className="lechuzas-total">${importe} Galeones</p> 
            <p className="lechuzas-info">Paquetes en cada lechuza:</p>
                <ul className="lechuzas-total-paquetes"> 
                  {productos.map((producto, index) => (
                    <li key={`${producto.id}-${index}`}>
                        <p>{producto.nombre} x{producto.cantidad}</p> 
                        <p>(${producto.precio * producto.cantidad} Galeones)</p>
                        <button onClick={() => handleEliminarProducto(index)}> 
                          Cancelar Lechuza
                        </button>
                        {mostrarConfirmacion && productoIndex === index  && (
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
                </ul> 
            { (productos.length === 0 &&
              <p className="lechuzas-total">Sin pedidos</p>
            )}
        </div>
    );
}