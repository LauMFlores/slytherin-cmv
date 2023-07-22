import HogwartsLogo from './componentes/HogwartsLogo'
import Musica from './componentes/Musica'
import Footer from './componentes/Footer';
import './globals.css'

export const metadata = {
  title: 'Campus Magico Virtual de Slytherin',
  description: 'Informacion y recursos para los estudiantes de Slytherin ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>
        <header className='layout-header-contenedor'>
          <div className='layout-header'>
            <HogwartsLogo/>
            <h1 className='layout-header-titulo'>SLYTHERIN CMV</h1>
            <Musica/>
          </div>
        </header>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
