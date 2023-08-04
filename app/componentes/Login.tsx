'use client';
import React, { useState } from "react";
import Link from 'next/link';
import Logo from './Logo'; 
import './estilos/login.css';
import database from '../data_usuarios.json';


const passwordDatabase = database.map((user) => ({
  ...user,
  password: "123" //"magiaantigua" // Cambio la clave segun cambia en la sala común:
}));

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [mostrarPassword, setMostrarPassword] = useState(false);


// Verificación login
  const handleSubmit = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      const userData = passwordDatabase.find((user) => user.username === usuario);
      if (userData && userData.password === clave) {
          setIsSubmitted(true);
          setError('');
          localStorage.setItem('usuarioAutenticado', JSON.stringify(userData));
        } else {
          setError('🔒 Usuario o contraseña incorrectos.');
          setClave('');
        }
  };

// Verificación de numero en username
  const handleUsernameInput = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    if (!value || /^\d+$/.test(value)) {
      setUsuario(value);
      setError('');   
    } else {
      setError('▶ Ingrese solo números en el campo de usuario');
    }
  };

// Toggle clave
  const handleToggleMostrarPassword = () => {
    setMostrarPassword(!mostrarPassword);
  };


  return (
    <div className='login-contenedor'>
      <Logo />
      <div className='login'>
        <h2 className='login-titulo'>CAMPUS MÁGICO VIRTUAL</h2>
        <h2 className='login-titulo'>LOGIN</h2>
        <form onSubmit={handleSubmit} className='login-formulario' action="">
          {/* usuario */}
            <input
              className='login-usuario'
              type="text"
              name='usuario'
              placeholder='Ingrese su IEM'
              value={usuario}
              onChange={handleUsernameInput} 
              autoComplete='off'
              required
              disabled={isSubmitted}
            />
          {/* clave */}
            <input
              className='login-clave'
              type={mostrarPassword ? 'text' : 'password'}
              name='clave'
              placeholder='Ingrese la contraseña'
              value={clave}
              onChange={(event) => setClave(event.target.value)}
              required
              disabled={isSubmitted}
            />
          {/* toggle clave */}
            <button className='login-mostrar-clave-boton' type='button' onClick={handleToggleMostrarPassword}>
              {mostrarPassword ? 'Ocultar' : 'Ver clave'}
            </button>
          {/* boton alohomora */}
            {!isSubmitted &&
            <button type='submit' className='login-alohomora-boton'>ALOHOMORA</button>}
        </form>

        {/* mensajes */}
        {error && <p className="login-error">{error}</p>}
        {isSubmitted && (
          <>
            <p className="login-mensaje">¡Hechizo exitoso!</p>
            <Link className='login-entrar-boton' href="/general"> ENTRAR </Link>
          </>
        )}
      </div>
        {/* <Link className='login-entrar-boton' href="/general">
          ENTRAR
        </Link> */}
    </div>
  );
}