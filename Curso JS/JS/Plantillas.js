'use strict'

//Uso de plantillas de texto

var nombre = prompt("Su nombre");
var apellido = prompt("Su apellido");

//Armamos la plantillas
var texto = `
    <h1> Hola que tal </h1>
    <h3> Mi nombre es: ${nombre} </h3>
    <h3> Mi apellido es: ${apellido} </h3>
`;

document.write(texto);