'use client';
import Link from "next/link";

export default function Navbar() {
  return(
    <nav style= {{backgroundColor: '#282c34',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-around',
    }}>
      
    <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link>
  <Link href="/lista" style={{ color: 'white', textDecoration: 'none' }}>Lista de Tareas</Link>
  <Link href="/productos" style={{ color: 'white', textDecoration: 'none' }}>Productos API</Link>
</nav>

);
}