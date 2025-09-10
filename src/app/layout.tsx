import Navbar from '@/components/Navbar';
import './globals.css';
import {ReactNode} from "react";
//TODO: crear el archivo con estilos predeterminados para el proyecto

export const metadata = {
  title: 'Clase listas y Renderizado',
  description: 'Aprendiendo React con Next.js',
};

//opcion 1 tipar el children
interface RootLayoutProps {
  children: ReactNode;
}
/*
-> funcion sin tipar
fuction suma (a, b) {
  return a + b;
}

-> funcion tipada
function suma (a: number, b: number): number {
  return a + b;
}

componente padre -> (props tipados) -> componente hijo (props tipados)
*/



export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
};