//Funciones tipadas
function getNumero(numero) {
    if (numero === void 0) { numero = 0; }
    return "El numero es: " + numero.toString();
}
var result = getNumero(10);
console.log(result);
