import Link from 'next/link';
import './componentesCSS/nav.css';

export default function Nav () {
    return (
        <>
        <ul>
            <li>
                <Link className='enlaces' href='./general'>General</Link>
            </li>
            <li>
                <Link className='enlaces' href='./nuevos-ingresos'>Nuevos Ingresos</Link>
            </li>
            <li>
                <Link className='enlaces' href='./provisiones-magicas'>Provisiones Magicas de Emergencia</Link>
            </li>
            <li>
                <Link className='enlaces' href='./'>LOGOUT</Link>
            </li>
        </ul>
        </>
    )
}