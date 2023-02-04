//Escribir un programa que escriba en pantalla los divisores comunes de dos números dados.
//Crear sítio donde ponemos al input en index.html.
// Identificar el espacio que creamos en index para que JS reconozca.
// Creamos una función que captura el numero del input insertado por los usuários.
// Creamos una función que determina los divisores de un  numero elegido y despúes del otro número.
// Imprimir en pantalla  todos los divisores comunes entre los dos  numeros elegido.



let number1 = prompt("Escribe un número");
let number2 = prompt("Escribe otro número");

let smallerNumber; //variable para guardar el numero más pequeño
let i; // posición que empeza el indice del bucle, en este caso empezamos con el numero 2.
if (number1 < number2) {   // función para determinar el numero más pqqueño.
    
    smallerNumber = number1;

}else{
    
    smallerNumber = number2;

}
// bucle for para determinar los divisores comunes entre dos números. Premero  
for (let i = 2; i <= smallerNumber/2; i++){
    if (number1 % i === 0 && number2 % i ===0) {

            document.write(i, "," );
        
    }
}