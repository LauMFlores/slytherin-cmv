'use client';
import React, { useState } from "react";
import './componentesCSS/tarjetasContenedor.css'
import Tarjeta from './Tarjeta';
import data from './data_tarjetas.json'
import Filtro from "./Filtro";
import Buscar from "./Buscar";
import ProductosEnCamino from "./ProductosEnCamino";



export default function TarjetasContenedor() {

    const [mostrarContenido, setMostrarContenido] = useState(false);
    const [filtro, setFiltro] = useState("");
    const [busqueda, setBusqueda] = useState("");
    const [productosEnCamino, setProductosEnCamino] = useState<any[]>([]);
    const [cantidadItems, setCantidadItems] = useState(0);

    const obtenerCategorias = () => {
        const categoriasUnicas: string[] = data.reduce(
          (categorias: string[], elemento: any) => {
            if (!categorias.includes(elemento.tipo)) {
              categorias.push(elemento.tipo);
            }
            return categorias;
          },
          []
        );
        return categoriasUnicas;
      };
    
    const categorias = obtenerCategorias();
  
    
    const handleToggleContenido = () => {
        setMostrarContenido(!mostrarContenido);
    };
    
    const filtrarProductos = (categoria: string) => {
      setFiltro(categoria);
    };

    const buscarProductos = (termino: string) => {
        setBusqueda(termino);
      };
    
      const productosFiltrados = data
      .map((producto) => ({...producto,cantidad: 0,}))
      .filter((producto: any) => {
        const coincideCategoria = !filtro || producto.tipo === filtro;
        const coincideTerminoBusqueda = busqueda === "" || producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
        return coincideCategoria && coincideTerminoBusqueda;
      });
      
    
    const agregarProductoEnCamino = (producto: any) => {
        setProductosEnCamino([...productosEnCamino, producto]);
        setCantidadItems(cantidadItems + producto.cantidad);
    };

    const eliminarProductoEnCamino = (productoIndex: number) => {
        const nuevosProductosEnCamino = [...productosEnCamino];
        const productoEliminado = nuevosProductosEnCamino.splice(productoIndex,1)[0];
        const cantidadItemEliminado = productoEliminado.cantidad;
        setProductosEnCamino(nuevosProductosEnCamino);
        setCantidadItems(cantidadItems - cantidadItemEliminado);
          };

    return (
      <div>
        <h2>Encontrá tus Provisiones Mágicas de Emergencia Aquí</h2>

        <div className="filtro-contenedor">
          <p onClick={handleToggleContenido}>
          {mostrarContenido ? <p>Cerrar Categorias</p> : <p>Abrir Categorias</p>}</p>
        {mostrarContenido && (
          <>
            <Filtro categorias={categorias} onFiltrar={filtrarProductos} />
            <Buscar onBuscar={buscarProductos} />
          </>
        )}
        </div>

        <div className="tarjetas-contenedor">
                {productosFiltrados.map((elemento) => (
                    <Tarjeta 
                        key={elemento.id} 
                        producto={elemento} 
                        agregarProductoEnCamino={agregarProductoEnCamino}
                    />
                ))}
        </div>

        <div className="lechuzas-contenedor">
            <ProductosEnCamino productos={productosEnCamino} cantidadItems={cantidadItems} onEliminarProducto={eliminarProductoEnCamino} />
        </div> 
        
      </div>
    )
}