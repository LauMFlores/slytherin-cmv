
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

    const pageTitle = 'Provisiones Mágicas de Emergencia';
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
    

    const productosFiltrados = data
      .map((producto) => ({...producto,cantidad: 0,}))
      .filter((producto: any) => {
        const coincideCategoria = !filtro || producto.tipo === filtro;
        const coincideTerminoBusqueda = busqueda === "" || producto.nombre.toLowerCase().includes(busqueda.toLowerCase());

        return coincideCategoria && coincideTerminoBusqueda;
      });
      
    const sinResultados = productosFiltrados.length === 0; 
      

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
      
      <Layout pageTitle={pageTitle}>
        <div className="descripcion-contenedor">
          {/* <h2 className='titulo'>Provisiones Magicas de Emergencia</h2> */}
          <p className='descripcion'>Encontrá tus Provisiones Mágicas de Emergencia Aquí</p>
        </div>
        <div className="provisiones-contenedor">
        

            {mostrarCategorias 
            ? <div className='contenedor-izquierdo' onClick={handleToggleCategorias}> 
                <p className='contenedor-nombre'>◀ Categorias</p>
                <div className="filtro-contenedor open">
                <Filtro categorias={categorias} onFiltrar={filtrarProductos} />
                <Buscar onBuscar={buscarProductos} /> 
                </div>
              </div>
             
            : <div className='contenedor-izquierdo' onClick={handleToggleCategorias}> 
                <p className='contenedor-nombre'> Categorias ▶</p>
                <div className="filtro-contenedor"></div>
              </div>}
     
            <div className="tarjetas-contenedor">
              {sinResultados && (
                <p>No se encuentra tal artículo mágico dentro de {filtro || "la tienda"}.</p>
              )}
          
              {productosFiltrados.map((elemento) => (
                  <Tarjeta 
                      key={elemento.id} 
                      producto={elemento} 
                      agregarProductoEnCamino={agregarProductoEnCamino}
                  />
                ))} 
            </div>

            <div className='contenedor-derecho' >
                {mostrarLechuzas ? 
                <>
                  <p className='contenedor-nombre'onClick={handleToggleLechuzas}> Lechuzas ▶</p>
                  <div className="lechuzas-contenedor open">
                    <ProductosEnCamino productos={productosEnCamino} cantidadItems=     {cantidadItems} onEliminarProducto={eliminarProductoEnCamino} />
                  </div>
                </>
              : <>
                  <p className='contenedor-nombre' onClick={handleToggleLechuzas}>◀ Lechuzas </p>
                  <div className="lechuzas-contenedor"></div>
                </>}
              </div>
            
      </div>
     
      </Layout>
    )
}

    