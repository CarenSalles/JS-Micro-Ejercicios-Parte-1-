//Escribe un programa que pida una frase y escriba las vocales que aparecen
//Crear sítio donde ponemos al input en index.html.
// Identificar el espacio que creamos en index para que JS reconozca.
// Creamos una función que captura la frase de el input insertado por los usuários.
// Creamos una función que determina cual son las vogales atravesando todas las letras de la frase.
//imprimir en pantalla.

let phrase = prompt("Introduce una frase:");

let characternumber = phrase.length; //Devuelve la longitud del string.

phrase = phrase.toUpperCase(); //Devuelve el string en mayúsculas.

let car;
let count = 0;
let i;     

for (let i= 0 ; i <characternumber; i++) {
   car = phrase.charAt(i); //recupera el caracter i del string.

   if ((car == "A") || (car == "E") || (car == "I") || (car == "O") || (car == "U")) {
    
    count ++;
   }

    document.write( "Número de Vocales:" + count + ".");
}