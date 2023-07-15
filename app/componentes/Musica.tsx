'use client';
import { useEffect, useState } from 'react';
import './componentesCSS/musica.css';

export default function Musica() {
  const [sound, setSound] = useState(false);

  useEffect(() => {
    if (sound) {
      const music = document.getElementsByTagName("audio")[0];
      music.play();
    } else {
      const music = document.getElementsByTagName("audio")[0];
      music.pause();
    }
  }, [sound]);

  function toggleMusic() {
    setSound(!sound);
  }

  return (
    <div>
      <button className='boton-musica' onClick={toggleMusic}>
        {sound ? '🔇 OFF' : '🔊 ON'}
      </button>
      <audio loop src='./hedwigTheme.mp3'></audio>
    </div>
  );
}