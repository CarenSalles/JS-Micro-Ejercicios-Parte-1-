// Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
// Crear sítio donde ponemos al input en indexedDB.html.
// Identificar el espacio que creamos en index para que JS reconozca.
// Creamos una función que captura los numeros de los inputs insertados por los usuários.
// Creamos una función que determina cual el numero mayor y que imprima en pantalla.


// function capture() {

//     const number1 = document.getElementById("number1").value;
//     const number2 = document.getElementById("number2").value;
//     const number3 = document.getElementById("number3").value;
//     console.log(number1); 

// }

// const bigger, temporary;
// const number1 = parseInt(prompt("Número 1"));
// const number2 = parseInt(prompt("Número 2"));
// const number3 = parseInt(prompt("Número 3"));

// if (number1 > number2) {
//     temporary = number1;
// }
// else {
//     temporary = number2;
// }
// if (temporary > number3) {
//     bigger = temporary ;
// }
// else {
//     bigger = number3;
// }

// document.write("El mayor es " + bigger);

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

const number1 = prompt ("Escribe un número");
const number2 = prompt ("Escribe otro número");
const number3 = prompt ("Escribe otro número");

if (number1 > number2 && number1 > number3) {

    console.log(number1);

} else if (number2 > number3){

    console.log(number2);

} else {

    console.log(number3);
}
