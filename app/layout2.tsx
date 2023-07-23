
import Nav from './componentes/Nav';

export default function Layout({ children, pageTitle }: { children: React.ReactNode; pageTitle: string }) {
    return (
      <div className='layout2'>
        <div className='layout2-contenedor'>
            <Nav />
            <h2>{pageTitle}</h2>
        </div>
        {children}
      </div>
    );
}