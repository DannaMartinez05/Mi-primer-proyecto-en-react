'use client';

import { useState, useEffect } from 'react';

// Consumir API Fake Store
// Renderizado condicional --> cargando... / error
// .map() --> renderizar la info
// Diseño grid

export default function Productos() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    // useEffect para consumir la API
    useEffect(() => {
        const cargarProductos = async () => {
            try {
                setCargando(true);
                const res = await fetch('https://fakestoreapi.com/products');
                if (!res.ok) throw new Error('Error al cargar productos');
                const data = await res.json();
                setProductos(data);
            } catch (e) {
                setError('Error al cargar productos ❌');
            } finally {
                setCargando(false);
            }
        };
        cargarProductos();
    }, []);

    const agregarAlCarrito = (producto) => {
        alert(`Agregaste ${producto.title} al carrito por $${producto.price}`);
    };

    return(
        <div style={{textAlign: 'center', marginTop: '30px'}}>
            <h1>Lista de Productos</h1>

            {/* Renderizado condicional - Cargando */}
            {cargando && (
                <div style={{ 
                    padding: '40px', 
                    fontSize: '1.2em', 
                    color: '#666' 
                }}>
                    Cargando productos...
                </div>
            )}

            {/* Renderizado condicional - Error */}
            {error && !cargando && (
                <div style={{ 
                    padding: '40px', 
                    fontSize: '1.2em', 
                    color: 'red',
                    backgroundColor: '#ffe6e6',
                    borderRadius: '8px',
                    margin: '20px auto',
                    maxWidth: '400px',
                    border: '1px solid #ffcccc'
                }}>
                    {error}
                </div>
            )}

            {/* Renderizado condicional - Productos */}
            {!cargando && !error && (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px',
                    padding: '20px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {productos.map(producto => (
                        <div key={producto.id}
                             style={{
                                 border: '1px solid #ddd',
                                 borderRadius: '12px',
                                 padding: '20px',
                                 textAlign: 'center',
                                 backgroundColor: '#fff',
                                 boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                 transition: 'transform 0.2s ease',
                                 cursor: 'pointer'
                             }}
                             onMouseOver={(e) => e.target.style.transform = 'translateY(-5px)'}
                             onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}>
                            
                            {/* Imagen */}
                            <div style={{ 
                            marginBottom: '15px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: '180px'   // altura fija para que todas las imágenes queden alineadas
                            }}>
                            <img 
                                src={producto.image} 
                                alt={producto.title} 
                                style={{
                                maxWidth: '150px',
                                maxHeight: '150px',
                                objectFit: 'contain',
                                borderRadius: '8px',
                                border: '2px solid #f0f0f0'
                                }}
                            />
                            </div>

                            
                            {/* Nombre */}
                            <h3 style={{ 
                                margin: '0 0 10px 0', 
                                color: '#333',
                                fontSize: '1.1em',
                                height: '2.5em',
                                overflow: 'hidden',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical'
                            }}>
                                {producto.title}
                            </h3>
                            
                            {/* Precio */}
                            <p style={{ 
                                fontWeight: 'bold', 
                                fontSize: '1.5em',
                                color: '#2c5aa0',
                                margin: '0 0 15px 0'
                            }}>
                                ${producto.price}
                            </p>
                            
                            {/* Descripción */}
                            <p style={{ 
                                color: '#666', 
                                margin: '0 0 20px 0',
                                lineHeight: '1.4',
                                fontSize: '0.9em',
                                height: '4.2em',
                                overflow: 'hidden',
                                display: '-webkit-box',
                                WebkitLineClamp: 3,
                                WebkitBoxOrient: 'vertical'
                            }}>
                                {producto.description}
                            </p>
                            
                            {/* Botón de Agregar */}
                            <button
                                onClick={() => agregarAlCarrito(producto)}
                                style={{
                                    backgroundColor: '#28a745',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '6px',
                                    padding: '12px 24px',
                                    fontSize: '1em',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.2s ease',
                                    width: '100%'
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                                onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
                            >
                                Agregar al Carrito
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}