//import Footer from './componentes/Footer'
//import Nav from './componentes/Nav'
import HogwartsLogo from './componentes/HogwartsLogo'
import Musica from './componentes/Musica'
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
        <header>
          <HogwartsLogo/>
          <h1 className='header-titulo'>SLYTHERIN CMV</h1>
          <Musica/>
        </header>
        {children}
      </body>
    </html>
  )
}
