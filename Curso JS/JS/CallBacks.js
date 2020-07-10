'use strict'

//Uso de callbacks con funciones anonimas

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

sumame(5,7, function(dato){
    console.log("La suma es: ", dato);
}, function(dato){
    console.log("La suma por dos es: ", (dato * 2));
});

//Uso con funciones flecha

sumame(5,7, dato => {
    console.log("La suma es: ", dato);
}, dato => {
    console.log("La suma por dos es: ", (dato * 2));
});