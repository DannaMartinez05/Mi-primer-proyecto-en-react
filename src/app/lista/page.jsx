'use client';
import { useState } from 'react';

export default function Page() {
  const [tareas, setTareas] = useState([
    "Estudiar React",
    "Hacer ejercicio",
    "Leer un libro"
  ]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== "") {
      setTareas([...tareas, nuevaTarea]);
      setNuevaTarea("");
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Lista de Tareas</h1>

      {/* Input para agregar tarea */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Escribe una nueva tarea"
          style={{
            padding: "10px",
            width: "250px",
            marginRight: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />
        <button
          onClick={agregarTarea}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#0070f3",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Agregar
        </button>
      </div>

      {/* Renderizado condicional */}
      {tareas.length === 0 ? (
        <p>No tiene tareas pendientes</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tareas.map((tarea, index) => (
            <li
              key={index}
              style={{
                margin: "10px 0",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "#333",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "400px",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              {tarea}
              <button
                onClick={() => eliminarTarea(index)}
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  border: "none",
                  backgroundColor: "red",
                  color: "#fff",
                  cursor: "pointer"
                }}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
