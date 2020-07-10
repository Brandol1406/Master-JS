'use strict'

function calculadora(v1, v2) {
    console.log("Valor 1: " + v1 + ", Valor 2: " + v2);
    console.log("Suma : " + (v1 + v2));
    console.log("Resta : " + (v1 - v2));
    console.log("Multiplicación : " + (v1 * v2));
    console.log("División : " + (v1 / v2));
    console.log("*************************");
}

console.log("--- Calculos ---");
for (let i = 0; i < 10; i++) {
    console.log("No. " + i);
    calculadora(i,i);
}
