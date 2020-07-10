'use strict'
$(document).ready(function(){
    //Selector de temas
    var themeHref = localStorage.getItem("themeHref");
    var themeSS = $("#theme");

    if (themeHref){
        themeSS.attr("href", themeHref);
    }    
    $("#to-green").click(function(){
        themeSS.attr("href", "css/green.css");
        localStorage.setItem("themeHref", "css/green.css");
    });
    $("#to-red").click(function(){
        themeSS.attr("href", "css/red.css");
        localStorage.setItem("themeHref", "css/red.css");
    });
    $("#to-blue").click(function(){
        themeSS.attr("href", "css/blue.css");
        localStorage.setItem("themeHref", "css/blue.css");
    });

    //Scroll suavizado
    $(".subir").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 500);
    });

    //Login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();
        localStorage.setItem("form_name", form_name);
        location.reload();
    });
    var form_name = localStorage.getItem("form_name");
    if(!isNull(form_name)){
        var greeting = "<br/><strong>Bienvenido, " + form_name + "</strong>";
        var about_p = $("#about p");
        about_p.html(greeting);
        about_p.append("&nbsp;<a href='#' onclick='localStorage.removeItem(\"form_name\"); location.reload();'>Cerrar sesión</a>")
        $("#login").hide();
    }
});

function isNull(variable, sustitute){
    var thereIsVariable = variable != "" && variable != null && variable != undefined && variable != "null" && variable != "undefined";
    var thereIsSustitute = sustitute != null && sustitute != undefined && sustitute != "";
    if (thereIsSustitute) {
        if (thereIsVariable){
            return variable;
        } else {
            return sustitute;
        }
    } else {
        return !thereIsVariable;
    }
}