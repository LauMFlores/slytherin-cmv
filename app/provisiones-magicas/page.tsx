
'use client';
import React, { useState } from "react";
import Layout from "../layout2"
import data from "./data_tarjetas.json"
import Tarjeta from "../componentes/Tarjeta";
import Filtro from "../componentes/Filtro";
import Buscar from "../componentes/Buscar";
import ProductosEnCamino from "../componentes/ProductosEnCamino";
import './page.css';

export default function provisionesMagicas () {

    const [mostrarCategorias, setMostrarCategorias] = useState(false);
    const [mostrarLechuzas, setMostrarLechuzas] = useState(false);
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
  
    
    const handleToggleCategorias = () => {
        setMostrarCategorias(!mostrarCategorias);
    };
    
    const handleToggleLechuzas = () => {
        setMostrarLechuzas(!mostrarLechuzas);
    };

    const filtrarProductos = (categoria: string) => {
      setFiltro(categoria);
    };

    const buscarProductos = (termino: string) => {
        setBusqueda(termino);
      };
    
    // Agrego cantidad al objeto producto, muestro filtros.
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
      
      <Layout>

        <h1>Provisiones Magicas de Emergencia</h1>
        <h2>Encontrá tus Provisiones Mágicas de Emergencia Aquí</h2>

        <div className="filtro-contenedor">
          <p onClick={handleToggleCategorias}>
            {mostrarCategorias ? <p>Cerrar Categorias</p> : <p>Abrir Categorias</p>}</p>
            {mostrarCategorias && (
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
            <div className={`box ${mostrarLechuzas ? 'open' : ''}`}>
          <p  onClick={handleToggleLechuzas}>
            {mostrarLechuzas ? <p>Cerrar Lechuzas</p> : <p>Ver Lechuzas</p>}</p>
            {mostrarLechuzas && (
            <ProductosEnCamino productos={productosEnCamino} cantidadItems={cantidadItems} onEliminarProducto={eliminarProductoEnCamino} />  )}</div>
        </div> 
        
      </Layout>
    )
}

    