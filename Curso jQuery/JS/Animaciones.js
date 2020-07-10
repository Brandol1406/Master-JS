'use strict'
$(document).ready(function(){
    $("#boton").click(function(){
        var efecto = $("#efecto").val();
        $(".elemento").toggle(efecto);
    });
});