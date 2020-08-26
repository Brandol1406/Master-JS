"use strict";
exports.__esModule = true;
exports.Camiseta = void 0;
var Camiseta = /** @class */ (function () {
    //Constructor
    function Camiseta(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    //Metodo setter
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    //Metodo getter
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    return Camiseta;
}());
exports.Camiseta = Camiseta;
var camiseta = new Camiseta("Blanca", "Cuello V", "Hanes", "M", 200);
camiseta.setColor("Blanca");
console.log(camiseta);
