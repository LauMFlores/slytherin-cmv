import React from 'react';
import Login from './componentes/Login';
import Faq from './componentes/Faq';
import './page.css';
 

export default function Home() {
  
  return (
    <div className="home-contenedor">
      <main className="main-contenedor"> 
          <Login/>
          <Faq/>  
      </main>
      </div>
  )
}
