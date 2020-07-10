'use strict'

//Arreglo de nombres
var nombres = ["Carlos", "Pedro", "Reyna", "Elizabeth", "Javier", "Andres", "Victor"];
//Arrglo de lenguajes (forma diferente)
var lenguajes = new Array("PHP", "Java", "C#", "Phyton");

console.log(nombres);
console.log(lenguajes);

//Escribiendo el Array
document.write("<h1>Nombres con for</h1>");

document.write("<ul>");
for(let i = 0; i < nombres.length; i++) {
    document.write("<li>"+ nombres[i] +"</li>");
}
document.write("</ul>");

//usando .join
document.write("<h1>Nombres con .join()</h1>");

document.write("<p>" + nombres.join(", ")  + "</p>");

//usando .forEach()
document.write("<h1>Nombres con .forEach()</h1>");

document.write("<ul>");
nombres.forEach(function (elem, index, data){
    document.write("<li>"+ elem + " " + index +"</li>");
});
document.write("</ul>");

//Usando for In
document.write("<h1>Recorriendo el arreglo con for in</h1>");
document.write("<ul>");
for(let i in nombres) {
    document.write("<li>" + nombres[i] + "</li>");
}
document.write("</ul>");

//Ordenar arreglos
document.write("<h1>Ordenamos de forma ascendente el arreglo con .sort()</h1>");
var nombresAscSorted = nombres.sort();
document.write("<ul>");
for(let i in nombresAscSorted) {
    document.write("<li>" + nombresAscSorted[i] + "</li>");
}
document.write("</ul>");

document.write("<h1>Ordenamos de forma descendente el arreglo con .reverse()</h1>");
var nombresDescSorted = nombres.reverse();
document.write("<ul>");
for(let i in nombresDescSorted) {
    document.write("<li>" + nombresDescSorted[i] + "</li>");
}
document.write("</ul>");

//Busquedas en arreglos
document.write("<h1>Realizamos busquedas dentro de los arreglos con .find()</h1>");
var result = nombres.find(n => n == "Carlos" );
document.write("<ul>");
document.write("<li>" + result + "</li>");
document.write("</ul>");