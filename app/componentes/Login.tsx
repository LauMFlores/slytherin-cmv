'use client';
// import React, { useState } from "react";
// import Link from 'next/link';
// import './componentesCSS/login.css';
// import Logo from './Logo';

// export default function Login () {

  
//     const [isSubmitted, setIsSubmitted] = useState(false);

    

//       // User Login info
//     const database = [
//         {
//         username: "lau",
//         password: "lau"
//         },
//         {
//         username: "user2",
//         password: "pass2"
//         }
//     ];
  
  
//     const handleSubmit = (event: { preventDefault: () => void; }) => {
//         //Prevent page reload
//         event.preventDefault();
  
//     let { usuario, clave } = document.forms[0];
  
//     // Find user login info
//     const userData = database.find((user) => user.username === usuario.value);
  
    
//     // Compare user info
//     if (userData) {
//         if (userData.username === usuario.value && userData.password === clave.value)
//          {
//         // Invalid password
//         setIsSubmitted(true);}}
//     }

 
  
  
//     return (
//         <div className='login'>
//             <Logo/>
//             <div>
//             <h2 className='login-titulo'>Campus Magico Virtual</h2>
//             <h2 className='login-titulo'>LOGIN</h2>
//             <form  onSubmit={handleSubmit} className='login-formulario' action="">
//                 <input className='login-usuario' type="text" name='usuario' placeholder='Ingrese su IEM' required/>
              
//                 <input className='login-clave' type="password" name='clave' placeholder='Ingrese la contraseña' required/>
            
//                 <button type='submit' className='alohomora-boton'> ALOHOMORA</button>
//                 {isSubmitted ? <Link className='login-boton' href="./general">ENTRAR</Link>: <div></div> }
                
//             </form>
            
//             </div>
//         </div>
//     )
// }
import React, { useState } from "react";
import Link from 'next/link';
import './componentesCSS/login.css';
import Logo from './Logo';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const database = [
    {
      username: "123",
      password: "lau"
    },
    {
      username: "1234",
      password: "pass2"
    }
  ];

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const userData = database.find((user) => user.username === usuario);

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
      setError('Ingrese solo números en el campo de usuario');
    }
  };

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='login'>
      <Logo />
      <div>
        <h2 className='login-titulo'>Campus Magico Virtual</h2>
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
              type='button'
             className='login-mostrar-clave-boton'
              onClick={handleToggleShowPassword}
            >
              {showPassword ? 'Ocultar' : 'Ver clave'}
            </button>
          <button type='submit' className='alohomora-boton'> ALOHOMORA</button>
        </form>

        {error && <p className="login-error">{error}</p>}

        {isSubmitted && (
            <>
            <p className="login-mensaje">¡Hechizo exitoso!</p>
          <Link className='login-boton' href="/general">
            ENTRAR
          </Link></>
        )}
      </div>
    </div>
  );
}