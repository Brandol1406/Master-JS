//TIPOS DE DATOS

//Cadena
const cadena: string = "Hola que tal";

//Numero
const numero: number = 10;

//Booleano
const booleano: boolean = true;

//Cualquiera o dinámico
const cualquiera: any = "Un texto";

//Arrays dinámico 
const dinamicArr: Array<any> = ["Mango", 10, "Limón", 33, true, "Mandarina"];

//Arrays de cadena 
const frutas: Array<string> = ["Mango", "Melón", "Limón", "Cereza", "Chinola", "Mandarina"];
//o 
const masFrutas: string[] = ["Pera", "Manzana", "Uva", "Fresa", "Melocotón", "Guayaba"];

//Arrays de numero
const numeros: Array<number> = [1, 2, 3, 4, 5, 6];
//o
const otrosNumeros: number[] = [7, 8, 9, 10, 11, 12];

//Tipos de datos personalizados
type alfanumerico = string | number;
let alfanum: alfanumerico = 10; alfanum = "Holaaaaa!";