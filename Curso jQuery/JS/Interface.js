$(document).ready(function(){
    $("#calendar").datepicker();

    //Uso de draggable
    $(".elemento").draggable();
    //Uso de resizable
    $(".elemento").resizable();
    //Uso de selectable (requiere de setear estilos CSS)
    //$(".lista-seleccionable").selectable();
    //Uso de sortable (solo funciona si selectable no esta aplicado a la lista)
    var sortConfig = {
        update: (event, ui) => {
            console.log(event);
            console.log(ui);
        }
    };
    $(".lista-seleccionable").sortable(sortConfig);
    //Uso de droppable
    $("#elemento-movido").draggable();
    $("#area").droppable({
        drop: function(event, elemDroped) {
            console.log({event});
            console.log({elemDroped});
        }
    });
});