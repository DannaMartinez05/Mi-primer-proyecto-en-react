/*
useEffect (() => {
    -- accion que quiero ejecutar
}, [dependencias]) -- array de dependencias



*/
// generar una lista al ejecutar un efecto secundario me muestre el contenido en consola

'use client';

import { useState, useEffect } from "react";

export default function Mensaje(){

    const [nombre, setNombre] = useState("");

    // useEffect
    useEffect(() => {
        console.log("El nombre es: ", nombre)

    }, [nombre]);

    return (
        <div style={{textAlign: 'center'}}>
          <input
          type="text"
          placeholder="Escribe tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}

          />  
          <p> Hola {nombre || "invitado"} </p>
        </div>
    )
}