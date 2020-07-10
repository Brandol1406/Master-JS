'use strict'

$(document).ready(function(){
    var caja = $("#box");
    caja.hide();
    $("#ocultar").hide();

    var efecto = $("#efecto");
    var velocidad = $("#velocidad"); 

    $("#mostrar").click(function(){
        mostrar(caja , efecto, velocidad);
    });
    $("#ocultar").click(function(){
        ocultar(caja, efecto, velocidad);
    });
});

function mostrar(elem , efecto, velocidad){
    efecto = Number(efecto.val());
    velocidad = velocidad.val();

    switch (efecto)
    {
        case 1:
            elem.show(velocidad, () => ocultaBoton());
            break;
        case 2:
            elem.fadeIn(velocidad, () => ocultaBoton());
            break;
        case 3:
            elem.slideDown(velocidad, () => ocultaBoton());
            break;
    } 
}

function ocultar(elem, efecto, velocidad){
    efecto = Number(efecto.val());
    velocidad = velocidad.val();

    switch (efecto)
    {
        case 1:
            elem.hide(velocidad, () => muestraBoton());
            break;
        case 2:
            elem.fadeOut(velocidad, () => muestraBoton());
            break;
        case 3:
            elem.slideUp(velocidad, () => muestraBoton());
            break;
    } 
}

function muestraBoton(){
    $("#ocultar").hide();
    $("#mostrar").show();
}

function ocultaBoton(){
    $("#mostrar").hide();
    $("#ocultar").show();
}