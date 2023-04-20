//operador ternario 
const velocidad = 150; 
let mensaje; 
if (velocidad > 100) {
    mensaje = "Velocidad rapida"
} else 
mensaje = "Buena velocidad"
console.log(mensaje);
const Velocidad = 90; 
const Mensaje = Velocidad > 100 ? "Vas muy rapido": "Vas muy lento";
console.log(Mensaje);
//ciclo for
for (let i = 0; i < 10 ; i++) {
    if (i == 5) continue
    console.log(i); 
    
}
//ciclo while
let i = 0;
while (i < 10) {
    console.log(i);
i++;

}
//NUMEROS PARES

for (let i= 0; i<= 100; i++) {
    if (i%2==0)   //el if nunca lleva ; 
    console.log(i); 
} 
//Numeros primos en javascript
for (i=2; i<100; i++){
    let primo = true;
    for(let j=2; j<i; j++){
        if (i%j==0){
            primo = false;
        }
    }
    if (primo){
        console.log(i);
    }
}

