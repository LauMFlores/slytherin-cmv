'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import './componentesCSS/nav.css';

const menuLinks = [
    { href: '/general', text: 'General' },
    { href: '/salon-personal', text: 'Salón Personal' },
    { href: '/provisiones-magicas', text: 'Provisiones Mágicas de Emergencia' },
];

export default function Nav() {

    const [mostrar, setMostrar] = useState(false);

    const toggleMenu = () => {
        if (window.innerWidth <= 719) {
            setMostrar(!mostrar);
        }
    };

    const handlePantallaGrande = () => {
        if (window.innerWidth > 719) {
            setMostrar(false);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("usuarioAutenticado");
      };

    useEffect(() => {
        window.addEventListener('resize', handlePantallaGrande);
        return () => {
            window.removeEventListener('resize', handlePantallaGrande);
        };
    }, []);



    return (
        <div onClick={toggleMenu} className='nav-contenedor' >
             <p className='nav-icon'></p>
             <p className='nav-icon'></p>
             <p className='nav-icon'></p>
             <ul className={`nav ${mostrar ? 'abierto' : ''}`}>
                {menuLinks.map((link) => (
                    <li className='nav-item'key={link.href}>
                        <Link className='nav-enlaces' href={link.href}>
                            {link.text}
                        </Link>
                    </li>
                ))}
                    <li className="nav-item" key="logout">
                        <Link className="nav-enlaces" onClick={handleLogout}href="/">
                            LOGOUT
                        </Link>
                    </li>
            </ul>
        </div>
    );
}