'use client';
import React, {useState} from "react";
import './estilos/logo.css';

export default function Logo () {
        const [isHovering, setIsHovered] = useState(false);
        const onMouseHover = () => setIsHovered(true);
        const onMouseUnhover = () => setIsHovered(false);

        return (
          <>
          <div className='logo' onMouseEnter={onMouseHover} onMouseLeave={onMouseUnhover}>
              {isHovering ? (
                <img src="/slytheringif0.gif"  alt="logo de slytherin en movimiento" />
              ) : (
                <img src="/slytherin-logo0.jpg"  alt="logo de slytherin estatico" />
              )} 

          </div>
         
          </>
        );
      };