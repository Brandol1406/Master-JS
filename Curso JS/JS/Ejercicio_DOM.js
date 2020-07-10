'use strict'

window.addEventListener('load', ()=> {
    document.querySelector("#myForm").addEventListener('submit', function () {
        enviar();
    });
});

function enviar() {
    //Obteniendo
    var nombre = document.querySelector("#nombre").value;
    var apellido = document.querySelector("#apellido").value;
    var edad = document.querySelector("#edad").value;
    var mostrar = document.querySelector("#muestra");

    //Mostrando
    document.querySelector("#p_nombre span").innerHTML = nombre;
    document.querySelector("#p_apellido span").innerHTML = apellido;
    document.querySelector("#p_edad span").innerHTML = edad;

    mostrar.style.display = "inline";
}