'use client';
import Layout from "../layout2";
import data from "../data_usuarios.json";



  export default function nuevosIngresos (usuario:number){

    const pageTitle = 'Salón Personal';

    // const alumno = data.find(user => user.username === usuario);

    return (
      <Layout pageTitle={pageTitle}>
          <main className="campus"> 
          <h1> BIENVENIDO ! </h1>
          <div style={{backgroundColor: 'white'}}>
          <div style={{backgroundColor: 'var(--verde1)'}}> COLOR</div>
          <div style={{backgroundColor: 'var(--verde2)'}}> COLOR</div>
          <div style={{backgroundColor: 'var(--verde3)'}}> COLOR</div>
          <div style={{backgroundColor: 'var(--verde4)'}}> COLOR</div>
          <div style={{backgroundColor: 'var(--verde5)'}}> COLOR</div>
          <div style={{backgroundColor: 'var(--verde6)'}}> COLOR</div>
          <div style={{backgroundColor: 'var(--verde7)'}}> COLOR</div>
          <div style={{backgroundColor: 'var(--gris1)'}}> COLOR</div>
          <div style={{backgroundColor: 'var(--gris2)'}}> COLOR</div>
          <div style={{backgroundColor: 'var(--gris3)'}}> COLOR</div>
          <div style={{backgroundColor: 'var(--gris4)'}}> COLOR</div>
          <div style={{backgroundColor: 'var(--gris5)'}}> COLOR</div>
          <div style={{backgroundColor: 'var(--gris6-transparente-menu)'}}> COLOR</div>
          <div style={{backgroundColor: 'var(--negro)'}}> COLOR</div>
          <div style={{backgroundColor: 'var(--blanco)'}}> COLOR</div>
          </div>
          </main>
      </Layout>
  )
  }

