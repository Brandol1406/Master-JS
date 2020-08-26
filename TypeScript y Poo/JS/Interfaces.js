var Humano = /** @class */ (function () {
    function Humano() {
        this.listo = true;
    }
    Humano.prototype.caminar = function (velocidad) {
        console.log("El humano esta caminando a 2 patas, a una velocidad de " + velocidad.toString() + " Km/h");
    };
    Humano.prototype.detenerse = function () {
        console.log("Se ha detenido el humano");
    };
    return Humano;
}());
var Perro = /** @class */ (function () {
    function Perro() {
        this.listo = true;
    }
    Perro.prototype.caminar = function (velocidad) {
        console.log("El perro esta caminando a 4 patas, a una velocidad de " + velocidad.toString() + " Km/h");
    };
    Perro.prototype.detenerse = function () {
        console.log("Se ha detenido el perro");
    };
    return Perro;
}());
