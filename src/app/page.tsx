'use client';
import Boton from '../components/Boton';
import { useState } from 'react';

export default function Home() {
  const [ mensaje, setMensaje ] = useState('');
  const manejarClick = (textoBoton: string) => {
    setMensaje(`Cliclaste el boton: ${textoBoton}`);
    if (textoBoton === 'Aceptar') {
      console.log('Boton Aceptar Presionado');
      alert('¡Gracias por aceptar!');
    } else if (textoBoton === 'Cancelar') {
      console.log('Boton Cancelar Presionado');
      alert('¡Gracias por cancelar!');
    }
  };

  return (
    <main style={{textAlign: 'center', padding: '20px'}}>
      <h1>Pagina Principal</h1>

      {mensaje && <p style={{color: 'green', fontSize: '18px'}}>{mensaje}</p>}

      <div>
        <Boton texto="Aceptar" onClick={manejarClick} />
        <Boton texto="Cancelar" onClick={manejarClick} />
      </div>
    </main>
  );
}
