'use strict'

//Evento load
window.addEventListener("load",function (){
    var input = document.getElementById("miInput");

    //click
    input.addEventListener("click", function (){
        //console.log("[click] has hecho click al input");
    });
    //focus
    input.addEventListener("focus", function (){
        console.log("[focus] Estas dentro del input");
    });
    //blur
    input.addEventListener("blur", function (){
        console.log("[blur] Estas fuera del input");
    });
    //keyDown
    input.addEventListener("keydown", function (event){
        console.log("[keydown] Pulsaste la tecla ", String.fromCharCode(event.keyCode));
    });
    //keyUp
    input.addEventListener("keyup", function (){
        //console.log("[keyup] soltaste la tecla");
    });
    //keyPress
    input.addEventListener("keypress", function (){
        console.log("[keypress] Tecla presionada", String.fromCharCode(event.keyCode));
    });
});