'use client';
import Layout from "../layout2";

import React, { useState } from "react";

// export default function nuevosIngresos (){
//     return (
//         <Layout>
//             <h1>Nuevos Ingresos de Primer Año</h1>
         
//         </Layout>
    
//     )
// }

export default function AccionConConfirmacion() {
    const [mostrarConfirmacion, setMostrarConfirmacion] = useState(false);
  
    const handleAccion = () => {
      // Aquí implementa la lógica de la acción que deseas realizar
  
      // Por ejemplo, eliminar un elemento, enviar un formulario, etc.
  
      // Mostrar el mensaje de confirmación
      setMostrarConfirmacion(true);
    };
  
    const handleConfirmarAccion = () => {
      // Implementa aquí la lógica para confirmar la acción
  
      // Por ejemplo, enviar la solicitud de eliminación, enviar el formulario, etc.
  
      // Después de confirmar, oculta el mensaje de confirmación
      setMostrarConfirmacion(false);
    };
  
    const handleCancelarAccion = () => {
      // Si el usuario cancela la acción, simplemente oculta el mensaje de confirmación
      setMostrarConfirmacion(false);
    };
  
    return (
<Layout>
        <div>
        <button onClick={handleAccion}>Realizar Acción</button>
        {mostrarConfirmacion && (
            <div>
            <p>¿Estás seguro de que deseas realizar esta acción?</p>
            <button onClick={handleConfirmarAccion}>Confirmar</button>
            <button onClick={handleCancelarAccion}>Cancelar</button>
          </div>
        )}
      </div></Layout>
    );
}