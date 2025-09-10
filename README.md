# Proyecto de React - Clases

Este repositorio contiene los ejercicios realizados en las primeras clases de React.

## 📌 Clase 1
En la primera clase se trabajó con **botones simples**:
- Un botón **Aceptar**, que al hacer click muestra el mensaje: *"Gracias por aceptar"*.
- Un botón **Cancelar**, que al hacer click muestra el mensaje: *"Gracias por cancelar"*.


## 📌 Clase 2 (20 de agosto)
En la segunda clase se realizaron dos ejercicios principales:

1. **Vista Effect**  
   - Cuando escribes tu nombre en un input, el texto en pantalla se actualiza en tiempo real con lo que escribes.

2. **Vista Nueva - Contador**  
   - Un botón para **aumentar** el conteo.  
   - Un botón para **disminuir** el conteo.  



# 📌 Clase 3 (03 de septiembre) de renderizado

## RENDERIZADO CONDICIONAL
->Ternarios
-> if- else

--> condicion a cumplir  se escribe 
--> condicion ? "si es verdadero" : "si es falso"

--> ? es if y el : es else

{
    productos.length >0
    ? <p>Hay productos disponibles</p>
        : <p>No hay productos disponibles</p>

}

##  CONECCIÓN CON LA API 
    // useEffect para consumir la API
    useEffect(() => {
        fetch('----')
            .then(res => res.json())
            .then(data => {
                setProductos(data);
                setCargando(false);
            });
            

