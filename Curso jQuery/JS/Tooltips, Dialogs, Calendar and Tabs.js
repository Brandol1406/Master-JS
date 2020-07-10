'use strict'

$(document).ready(function() {
    //Estableciendo los tooltips
    $(document).tooltip();

    //Usando los dialogs
    var dialogConfig = {
        title: "Caja dialogo",
        autoOpen: false
    };
    $("#dialogo").dialog(dialogConfig);
    $("#showDialog").click(function(){
        $("#dialogo").dialog("open");
    });

    //Usando los calendarios
    $("#fecha").datepicker();

    //Usando tabs
    $("#tab").tabs();
});