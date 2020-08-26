//Funciones tipadas
function getNumero(numero: number = 0): string{
    return "El numero es: " + numero.toString();
}

let result = getNumero(10);
console.log(result);