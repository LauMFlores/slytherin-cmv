import './componentesCSS/productosEnCamino.css'

interface ProductosEnCaminoProps {
    productos: any[];
    cantidadItems: number;
    onEliminarProducto: (productoIndex: number) => void;
  }
  
  export default function ProductosEnCamino({ productos, cantidadItems, onEliminarProducto }: ProductosEnCaminoProps) {

  
    let importe = productos.reduce((total, producto) => {
        return total + producto.precio * producto.cantidad;
      }, 0);

    const handleEliminarProducto = (productoIndex: number) => {
        onEliminarProducto(productoIndex);
    }
    return (
      <div className="lechuzas">
        <h3>Lechuzas:</h3>
        <ul className="lechuzas-ul">
            <li>Cantidad de lechuzas en viaje: {productos.length}</li>
            <li>Cantidad total de ítems solicitados: {cantidadItems}</li>
            <li>Importe a debitar de su cuenta en Gringotts: ${importe} Galeones </li>
            <li>Paquetes en cada lechuza:
                <ul> 
                    {productos.map((producto, index) => (
                        <li key={producto.id}>
                            <p>{producto.nombre} x{producto.cantidad}</p> <p>(${producto.precio * producto.cantidad} Galeones)</p>
                            <button
                                 onClick={() => handleEliminarProducto(index)}> Cancelar
                            </button>
                        </li>
                    ))}
                </ul>
            </li>
        </ul>
       
      </div>
    );
  }