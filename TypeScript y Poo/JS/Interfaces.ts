interface IAndar{
    listo: boolean;
    caminar(velocidad: number);
    detenerse();  
}

class Humano implements IAndar{
    listo: boolean = true;
    public caminar(velocidad: number){
        console.log("El humano esta caminando a 2 patas, a una velocidad de " + velocidad.toString() + " Km/h");
    }
    public detenerse() {
        console.log("Se ha detenido el humano");
    }
}
class Perro implements IAndar{
    listo: boolean = true;
    public caminar(velocidad: number){
        console.log("El perro esta caminando a 4 patas, a una velocidad de " + velocidad.toString() + " Km/h");
    }
    public detenerse() {
        console.log("Se ha detenido el perro");
    }
}