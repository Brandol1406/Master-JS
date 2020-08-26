var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(id, nombre) {
        this.nombre = nombre;
        this.id = id;
    }
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(id, nombre, puesto, salario) {
        var _this = _super.call(this, id, nombre) || this;
        _this.puesto = puesto;
        _this.salario = salario;
        return _this;
    }
    return Empleado;
}(Persona));
var empleado = new Empleado(1, "Carlos Lora", "Programador", 40000);
console.log(empleado);
var empleados = [
    new Empleado(1, "Carlos Lora", "Programador", 40000),
    new Empleado(2, "Pedro Rivera", "Soporte al usuario", 50000),
    new Empleado(3, "Carlos Suriel", "Soporte al usuario", 40000),
    new Empleado(4, "Mayelin muñoz", "Analista", 52000),
    new Empleado(5, "Geury Brito", "Encargado programacion y desarrollo", 85000)
];
console.table(empleados);
