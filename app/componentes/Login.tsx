'use client';
import React, { useState } from "react";
import Link from 'next/link';
import Logo from './Logo'; 
import './componentesCSS/login.css';
import database from '../data_usuarios.json';


const passwordDatabase = database.map((user) => ({
  ...user,
  password: "123" //"magiaantigua" // Aqui cambia la clave segun cambia en en la sala comun.
}));

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const userData = passwordDatabase.find((user) => user.username === usuario);

    if (userData && userData.password === clave) {
      setIsSubmitted(true);
      setError('');
    } else {
        setError('🔒 Usuario o contraseña incorrectos.');
        setClave('');
      }
  };

  const handleUsernameInput = (event: { target: { value: any; }; }) => {
    const value = event.target.value;
    if (!value || /^\d+$/.test(value)) {
      setUsuario(value);
      setError('');
      
    } else {
      setError('▶ Ingrese solo números en el campo de usuario');
    }
  };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='login-contenedor'>
      <Logo />
      <div className='login'>
        <h2 className='login-titulo'>CAMPUS MÁGICO VIRTUAL</h2>
        <h2 className='login-titulo'>LOGIN</h2>
        <form onSubmit={handleSubmit} className='login-formulario' action="">
          
          <input
            className='login-usuario'
            type="text"
            name='usuario'
            placeholder='Ingrese su IEM'
            value={usuario}
            // onChange={(event) => setUsuario(event.target.value)}
            onChange={handleUsernameInput} 
            autoComplete='off'
            required
            disabled={isSubmitted}
          />
          
          <input
            className='login-clave'
            type={showPassword ? 'text' : 'password'}
            name='clave'
            placeholder='Ingrese la contraseña'
            value={clave}
            onChange={(event) => setClave(event.target.value)}
            required
            disabled={isSubmitted}
          />

          <button
            className='login-mostrar-clave-boton'
            type='button'
            onClick={handleToggleShowPassword}
          >
            {showPassword ? 'Ocultar' : 'Ver clave'}
          </button>

          {!isSubmitted &&
          <button type='submit' className='login-alohomora-boton'>ALOHOMORA</button>}
        
        </form>

        {error && <p className="login-error">{error}</p>}

        {isSubmitted && (
            <>
            <p className="login-mensaje">¡Hechizo exitoso!</p>
          <Link className='login-entrar-boton' href="/general">
            ENTRAR
          </Link></>
        )}
      </div>
        {/* <Link className='login-entrar-boton' href="/general">
          ENTRAR
        </Link> */}
    </div>
  );
}