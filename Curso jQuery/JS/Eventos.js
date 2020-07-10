            $(document).ready(function (){
                //Oculto el cursor 
                $("body").css("cursor","none");
                
                var caja = $("#caja");

                caja.hover(cambiaVerde, cambiaRojo);
                
                function cambiaVerde() {
                    $(caja).css("background", "green");
                }
                function cambiaRojo() {
                    $(caja).css("background", "red");
                }

                caja.click(function () {
                    $(this).css("background", "blue");
                });
                 caja.dblclick(function () {
                    $(this).css("background", "hotpink");
                });
            });
            $(document).mousemove(function(){
                var x = event.clientX;
                var y = event.clientY;

                $("#x").html(x);
                $("#y").html(y);
                $("#sigueme").css("left", x).css("top", y);
            });