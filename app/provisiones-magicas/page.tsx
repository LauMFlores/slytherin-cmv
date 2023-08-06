'use client';
import { useState } from "react";
import Layout from "../layout2"
import data from "./data/data_tarjetas.json"
import Tarjeta from "./componentes/Tarjeta";
import Filtro from "./componentes/Filtro";
import Buscar from "./componentes/Buscar";
import ProductosEnCamino from "./componentes/ProductosEnCamino";
import './styles.css';

export default function provisionesMagicas () {

  const pageTitle = 'Provisiones Mágicas de Emergencia';
  const [mostrarCategorias, setMostrarCategorias] = useState(false);
  const [mostrarLechuzas, setMostrarLechuzas] = useState(false);
  const [filtro, setFiltro] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [productosEnCamino, setProductosEnCamino] = useState<any[]>([]);
  const [cantidadItems, setCantidadItems] = useState(0);

  //Filtros y Búsqueda
  //Categorias para filtrar
  const obtenerCategorias = () => {
    const categoriasUnicas: string[] = data.reduce(
      (categorias: string[], elemento: any) => {
          if (!categorias.includes(elemento.tipo)) {
            categorias.push(elemento.tipo);
          }
          return categorias;
      },[]
    );
      return categoriasUnicas;
  };
    
  const categorias = obtenerCategorias();
  
  const handleToggleCategorias = () => {
    setMostrarCategorias(!mostrarCategorias);
  };
    
  const filtrarProductos = (categoria: string) => {
    setFiltro(categoria);
  };
  
  const buscarProductos = (termino: string) => {
    setBusqueda(termino);
  };
  
  
  const productosFiltrados = data
  //agrego cantidad
  .map((producto) => ({...producto,cantidad: 0,}))
  //filtros
  .filter((producto: any) => {
    const coincideCategoria = !filtro || producto.tipo === filtro;
    const coincideTerminoBusqueda = busqueda === "" || producto.nombre.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideTerminoBusqueda;
  });
  
  const sinResultados = productosFiltrados.length === 0; 
  
  //Productos en camino
  const handleToggleLechuzas = () => {
    setMostrarLechuzas(!mostrarLechuzas);
  };

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
       <main>
        {/* Introduccion */}
        <div className="introduccion-contenedor">
          <p className='introduccion-p1'>
            ¿Se ha olvidado de comprar uno de sus libros de texto en el Callejón Diagón? ¿Un amigo le quemó la túnica practicando el hechizo Bombarda? ¿Su compañero en clase de pociones explotó sus frascos de vidrio por error y aún no domina Reparo? No desespere...</p> 
          <p className='introduccion-p2'>Todas sus provisiones mágicas de emergencia se encuentran aquí.</p>
          <p className='introduccion-p3'> Seleccione la cantidad que necesita, invoque el hechizo Accio desde el botón y una de nuestras lechuzas se pondrá en camino instantáneamente hacia donde se encuentre. Recuerde que el dinero se debitará de su cuenta familiar de Gringotts y que puede cancelar su pedido si aún no lo recibió.</p>
        </div>
        {/* Filtros */}
        <div className="provisiones-contenedor">
            {mostrarCategorias ? (
              <div className='contenedor-izquierdo' onClick={handleToggleCategorias}> 
                <p className='contenedor-nombre'>◀ Categorias</p>
                <div className="filtro-contenedor abierto">
                <Filtro categorias={categorias} onFiltrar={filtrarProductos} />
                <Buscar onBuscar={buscarProductos} /> 
                </div>
              </div>    
            ) : ( 
              <div className='contenedor-izquierdo' onClick={handleToggleCategorias}> 
                <p className='contenedor-nombre'> Categorias <span>▶</span> </p>
                <div className="filtro-contenedor"></div>
              </div>
            )}
        {/* Tarjetas */}
            <div className="tarjetas-contenedor">
              {sinResultados && (
                <p className="sin-item">No se encuentra tal artículo mágico dentro de {filtro || "la tienda"}.</p>
              )}
              {productosFiltrados.map((elemento) => (
                <Tarjeta key={elemento.id} producto={elemento} agregarProductoEnCamino={agregarProductoEnCamino}/>
              ))} 
            </div>
          {/* Productos en camino = Lechuzas */}
            <div className='contenedor-derecho' >
              {mostrarLechuzas ? (
                <>
                  <p className='contenedor-nombre'onClick={handleToggleLechuzas}> Lechuzas ▶ 🦉</p>
                  <div className="lechuzas-contenedor abierto">
                    <ProductosEnCamino productos={productosEnCamino} cantidadItems=     {cantidadItems} onEliminarProducto={eliminarProductoEnCamino} />
                  </div>
                </>
              ) : ( 
                <>
                  <p className='contenedor-nombre' onClick={handleToggleLechuzas}> <span>◀</span> Lechuzas </p>
                  <div className="lechuzas-contenedor"></div>
                </>
              )}
            </div>     
        </div>
       </main>
     </Layout>
    )
}

    