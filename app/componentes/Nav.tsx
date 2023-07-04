import Link from 'next/link';
import './componentesCSS/nav.css';

export default function Nav () {
    return (
        <>
        <ul>
            <li>
                <Link href='./'>Informacion General</Link>
            </li>
            <li>
                <Link href='./nuevos-ingresos'>Nuevos Ingresos</Link>
            </li>
            <li>
                <Link href='./provisiones-magicas'>Provisiones Magicas de Emergencia</Link>
            </li>
        </ul>
        </>
    )
}