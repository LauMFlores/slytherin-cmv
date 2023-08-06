interface BotoneraProps {
    opciones: string[];
    contenedorActivo: string;
    handleContenedorActivo: (section: string) => void;
  }

interface BotonSolicitarProps {
    onClick: () => void;
    disabled: boolean
  }

interface BuscarProps {
    onBuscar: (termino: string) => void;
}

interface FiltroProps {
    categorias: string[];
    onFiltrar: (categoria: string) => void;
}

interface ProductosEnCaminoProps {
  productos: any[];
  cantidadItems: number;
  onEliminarProducto: (productoIndex: number) => void;
}

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  descuento: number;
  imagen: string;
}

interface TarjetaProps {
  producto: Producto;
  agregarProductoEnCamino: (producto: Producto) => void;
}

interface ContadorProps {
  onCantidadChange: (cantidad: number) => void;
  precioUnitario: number;
}
