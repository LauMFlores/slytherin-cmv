import Footer from './componentes/Footer'
import Nav from './componentes/Nav'
import './globals.css'
import RootLayout from './layout'
 
export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="es">
      <body>
        <Nav/>
        {children}
        <Footer/>
      </body>
  </html>
  )
}