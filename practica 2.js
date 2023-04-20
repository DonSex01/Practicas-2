const a= true && true;
const b= true && false;
const c= false && true;
const d= false  && (3==4);
const e= "cat" && "dog";
const f= false && "cat";
const g= "cat" && false;
const tiempo = 25;
let saludo;
if (tiempo < 12) {
    saludo = "Buenos dias preciosa"; 
} else if (tiempo > 12 && tiempo <19){
    saludo = "Buenas tardes precioso"; 
}else if (tiempo >19 && tiempo < 24){
    saludo = "buenas noches precioso";
}else if (tiempo > 24){
saludo="MAMA GUEBO ESTA HORA NO EXISTE";
}    
console.log(saludo);
const Dia = 60;
let texto;
switch (Dia){
    case 0 :

    texto="Domingo";
    break;
    case 1 :

    texto="Lunes";
    break;
    case 2 :

    texto="Martes";
    break;
    case 3 :

    texto="Miercoles";
    break;
    case 4 :

    texto="Jueves";
    break;
    case 5 :

    texto="Viernes";
    break;
    case 6 :

    texto="Sabado";
    break;
    default:
        texto="MAMA GUEBO ESE DIA NO EXISTE"

}
console.log(texto);