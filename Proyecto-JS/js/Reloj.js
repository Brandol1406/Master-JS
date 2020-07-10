'use strict'
$(document).ready(function(){
    setInterval(function(){
        var hora = moment().format('LTS');
        $("#reloj").html(hora);
    }, 1000);
});