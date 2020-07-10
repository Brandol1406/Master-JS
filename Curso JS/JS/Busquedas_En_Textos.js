'use strict'

//Busquedas de datos dentro de cadenas de texto
let texto = "Carlos es la mejor persona del mundo, Carlos es muy importante";

console.log("Texto de ejemplo: ", texto);
console.log("Longitud del texto: ", texto.length);

//Uso de indexOf
console.log("Buscar 'Carlos' con indexOf da: ", texto.indexOf("Carlos"));

//Uso de lastIndexOf
console.log("Buscar 'Carlos' con lastIndexOf da: ", texto.lastIndexOf("Carlos"));

//Uso de search
console.log("Buscar 'Carlos' con search da: ", texto.search("Carlos"));

//Uso de match
console.log("Buscar 'Carlos' con match da: ", texto.match("Carlos"));

//Uso de match con regex
console.log("Buscar '/Carlos/g' con match da: ", texto.match(/Carlos/gi));

//Uso de charAt
console.log("Buscar letra No 38 con charAt da: ", texto.charAt(38)); 

//Uso de startsWith
console.log("Buscar 'Carlos' con startsWith da: ", texto.startsWith("Carlos"));

//Uso de includes
console.log("Buscar 'Carlos' con includes da: ", texto.includes("Carlos"));