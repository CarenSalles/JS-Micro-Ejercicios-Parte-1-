//Escribe un programa que pida una frase y escriba cuantas veces aparece la letra a
//Crear sítio donde ponemos al input en index.html.
// Identificar el espacio que creamos en index para que JS reconozca.
// Creamos una función que captura la frase de el input insertado por los usuários.
// Creamos una función que determina cual son la letra a atravesando todas las letras de la frase.
//imprimir en pantalla.

let phrase = prompt("Introduce la frase:");

let characternumber = phrase.length;

phrase = phrase.toUpperCase();

let car;
let count = 0;
let i;
 
for (let i = 0; i <characternumber; i++) {
  car = phrase.charAt(i);
  if ((car=="A")) {
    count ++;
  }
}

document.write("Número de a:" + count + "." );