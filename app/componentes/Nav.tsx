'use client';
import Link from 'next/link';
import { useState } from 'react';
import './componentesCSS/nav.css';

const menuLinks = [
    { href: '/general', text: 'General' },
    { href: '/nuevos-ingresos', text: 'Nuevos Ingresos' },
    { href: '/provisiones-magicas', text: 'Provisiones Mágicas de Emergencia' },
    { href: '/', text: 'LOGOUT' },
];

export default function Nav() {

    const [mostrar, setMostrar] = useState(false);

    const toggleMenu = () => {
        setMostrar(!mostrar);
    };

    return (
        <div onClick={toggleMenu} className='nav-contenedor' >
             <p></p>
             <p></p>
             <p></p>
             <ul className={`nav ${mostrar ? 'abierto' : ''}`}>
                {menuLinks.map((link) => (
                    <li className='nav-item'key={link.href}>
                        <Link className='nav-enlaces' href={link.href}>
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}