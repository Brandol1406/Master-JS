'use strict'

//Uso de parametros rest

function listadoFrutas(fruta1, fruta2, ...restoFrutas) {
    console.log("Fruta 1: ", fruta1);
    console.log("Fruta 2: ", fruta2);
    for(let i = 0; i < restoFrutas.length; i++){
        console.log("Fruta " + (i+3) + ": ", restoFrutas[i]);
    }
}

listadoFrutas("Piña","Mango","Manzana", "Pera", "Uva", "Melocoton", "Banana");
