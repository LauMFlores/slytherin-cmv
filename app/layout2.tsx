import Nav from './componentes/Nav'
 
export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
      <>
        <Nav/>
        {children}

      </>
  )
}