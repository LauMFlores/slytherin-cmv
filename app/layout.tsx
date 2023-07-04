import Footer from './componentes/Footer'
import Nav from './componentes/Nav'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
