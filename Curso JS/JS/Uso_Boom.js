'use strict'

var w = window.innerWidth;
var h = window.innerHeight;

function getWindowDimensions(){
    document.write("<h1>Dimensiones de la ventana</h1>");
    document.write("<h4>Ancho de la ventana: " + w + " pixeles</h4>");
    document.write("<h4>Alto de la ventana: " + h + " pixeles</h4>");
}

getWindowDimensions();
