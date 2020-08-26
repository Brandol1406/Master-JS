export class Camiseta{
    //Propiedades del objeto
    private color: string;
    public modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;
    //Constructor
    constructor(color: string, modelo: string, marca: string, talla: string, precio: number){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    //Metodo setter
    public setColor(color: string): void{
        this.color = color;
    }
    //Metodo getter
    public getColor(): string{
        return this.color;
    }
}

let camiseta = new Camiseta("Blanca", "Cuello V", "Hanes", "M", 200);

camiseta.setColor("Blanca");

console.log(camiseta);