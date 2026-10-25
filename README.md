# Actividad 2 · Consumo asíncrono de JSONPlaceholder

Práctica de Desarrollo de Interfaces (2.º DAM).
Realizada el 28 de septiembre de 2026.

- **Autor:** Ricardo Crespo
- **Proyecto:** paradigmasJS_RicardoCrespo
- **Rama de trabajo:** prueba

## Aplicación publicada

https://paradigmas-js-ricardo-crespo.vercel.app/

## Objetivo

Consultar los usuarios de JSONPlaceholder y mostrar el resultado
en la consola del navegador mediante tres formas de gestionar
operaciones asíncronas:

- fetch con promesas y .then().
- async/await.
- Un callback clásico que recibe el error o los datos.

## Funcionamiento

Los tres ejemplos consultan https://jsonplaceholder.typicode.com/users
y muestran los mismos diez usuarios.

El ejemplo con callback utiliza fetch internamente y entrega el
resultado mediante callback(error, datos).

La página muestra un título. Los resultados de las consultas se
visualizan en la consola de las herramientas de desarrollo del navegador.

## Archivos

- index.html: página que carga el archivo JavaScript.
- codigo.js: implementaciones de las tres consultas y gestión de errores.

## Ejecución local

Abre index.html en el navegador, o utiliza Live Server desde VS Code.

Abre las herramientas de desarrollo y selecciona Console.
Deben aparecer los resultados con las etiquetas FETCH CON THEN,
ASYNC/AWAIT y CALLBACK CLÁSICO.

Es necesaria una conexión a Internet para consultar JSONPlaceholder.

## Tecnologías y despliegue

HTML y JavaScript. No requiere instalar dependencias ni compilar.

El proyecto está publicado en GitHub en la rama prueba
y desplegado como sitio estático en Vercel.
