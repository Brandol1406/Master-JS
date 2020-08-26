class Persona{
    public id: number;
    public nombre: string;
    constructor(id: number, nombre: string){
        this.nombre = nombre;
        this.id = id;
    }
}

class Empleado extends Persona{
    public puesto: string;
    public salario: number;
    constructor(id: number, nombre: string, puesto: string, salario: number){
        super(id, nombre);
        this.puesto = puesto;
        this.salario = salario;
    }
}

let empleado = new Empleado(1, "Carlos Lora", "Programador", 40000);

console.log(empleado);

let empleados: Array<Empleado> = [
    new Empleado(1, "Carlos Lora", "Programador", 40000), 
    new Empleado(2, "Pedro Rivera", "Soporte al usuario", 50000),
    new Empleado(3, "Carlos Suriel", "Soporte al usuario", 40000),
    new Empleado(4, "Mayelin muñoz", "Analista", 52000),
    new Empleado(5, "Geury Brito", "Encargado programacion y desarrollo", 85000)
]; 

console.table(empleados);