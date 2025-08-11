# Challenge - Amigo Secreto (Español)
Tablero
[Trello][def]

Este proyecto es una implementación sencilla del clásico juego **Amigo Secreto**.  
El objetivo es poner en práctica la **lógica de programación** mediante el manejo de listas, interacción con el DOM y generación aleatoria.

## 📌 Descripción

La aplicación permite:
1. Agregar nombres de amigos a una lista.
2. Mostrar todos los nombres ingresados.
3. Sortear aleatoriamente un amigo secreto de la lista.
4. Mostrar el resultado en pantalla.

Si la lista está vacía al intentar sortear, el sistema mostrará una alerta pidiendo al usuario que ingrese al menos un nombre.

## 🛠 Tecnologías utilizadas

- **HTML** – Estructura de la interfaz.
- **CSS** – Estilos básicos (opcional según el diseño).
- **JavaScript** – Lógica principal y manipulación del DOM.

## 📂 Estructura del proyecto


## 🚀 Cómo usarlo

1. Clona o descarga el repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Ingresa nombres en el campo de texto y presiona **"Agregar"**.
4. Cuando tengas al menos un nombre, presiona **"Sortear amigo"**.
5. El resultado aparecerá en pantalla.

## 📜 Funciones principales

- **`agregarAmigo()`**  
  Obtiene el valor del input y lo agrega al arreglo `amigos` si no está vacío. Luego actualiza la lista en pantalla.

- **`listaDeAmigos()`**  
  Recorre el arreglo `amigos` y muestra cada nombre en un `<li>` dentro del elemento con id `lista`.

- **`sortearAmigo()`**  
  Si la lista no está vacía, elige un nombre aleatorio y lo muestra en el elemento con id `resultado`.

- **`limpiartexto()`**  
  Limpia el campo de entrada de texto.

- **`modificarTexto(elemento, texto)`**  
  Cambia el contenido (`innerHTML`) de un elemento HTML según su id.

## 📄 Licencia

Este proyecto es de uso libre con fines educativos.




#descriccion



[def]: https://trello.com/b/zRGwOPSC/trello-challenge-amigo-secreto-esp