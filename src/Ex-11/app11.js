// Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
//Crear sítio donde ponemos al input en index.html.
// Identificar el espacio que creamos en index para que JS reconozca.
// Creamos una función que captura el numero del input insertado por los usuários.
// Creamos una función que determina si el numero elegido es divisible por 2, 3, 5 o 7.
// Imprimir en pantalla que el numero elegido es divisible por uno de los cuatro.


let number = prompt ("Escribe un número");
if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0 ) {
    document.write( number + " " + "es divisible por 2,3,5 o 7.");
}
else{
    document.write( number + " " + "no es divisible por 2,3,5 o 7.");
}