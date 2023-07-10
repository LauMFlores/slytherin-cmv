import React from 'react';
import styles from './page.module.css';
// import Musica from './componentes/Musica';
import Login from './componentes/Login';
import Faq from './componentes/Faq';
// import HogwartsLogo from './componentes/HogwartsLogo';


export default function Home() {
  
  return (
    <main className={styles.main}> 
        
        <Login/>
        <Faq/>
     
    </main>
  )
}
