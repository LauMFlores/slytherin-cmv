'use client';
import React, {useState} from "react";
import './componentesCSS/logo.css';

export default function Logo () {
        const [isHovering, setIsHovered] = useState(false);
        const onMouseHover = () => setIsHovered(true);
        const onMouseUnhover = () => setIsHovered(false);

        return (
          <>
          <div className='logo' onMouseEnter={onMouseHover} onMouseLeave={onMouseUnhover}>
              {isHovering ? (
                <img src="/slytheringif.gif"  alt="logo" />
              ) : (
                <img src="/slytherin-logo.jpg"  alt="logo" />
              )} 

          </div>
         
          </>
        );
      };