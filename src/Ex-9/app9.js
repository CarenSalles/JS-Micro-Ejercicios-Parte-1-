//Escribe un programa que pida una frase y escriba las vocales que aparecen
// Crear sítio donde ponemos al input en index.html.
// Identificar el espacio que creamos en index para que JS reconozca.
// Creamos una función que captura la frase de el input insertado por los usuários.
// Creamos una función que determina cual son las vocales a atravesando todas las letras de la frase.
// Imprimir en pantalla las vocales de la frase.


let phrase = prompt("Introduce la frase:");

let characternumber = phrase.length;
  
phrase = phrase.toUpperCase;

let i;

for (let i = 0; i < characternumber; i++) {
     
   
    if ( phrase.substring(i,1)==="A" || phrase.substring(i,1)==="E" || phrase.substring(i,1)==="I" || phrase.substring(i,1)==="O" ||
    phrase.substring(i,1)==="U") {  

    document.write(phrase.substring(i,1));

    }
}
   