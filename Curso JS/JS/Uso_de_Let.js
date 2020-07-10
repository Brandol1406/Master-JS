//Usando Var

var x = "Valor";

console.log("Valor Original: " + x);
if (true){
    var x = "Otro Valor"
    console.log("Valor Dentro: " + x);
}
console.log("Valor Luego: " + x);

//Usando Let
var y = "Valor";

console.log("Valor Original: " + y);
if (true){
    let y = "Otro Valor"
    console.log("Valor Dentro: " + y);
}
console.log("Valor Luego: " + y);