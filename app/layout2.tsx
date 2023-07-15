import Footer from './componentes/Footer'
import Nav from './componentes/Nav'
// import './globals.css'

 
export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="es">
      <>
        <Nav/>
        {children}
        <Footer/>
      </>
  </html>
  )
}