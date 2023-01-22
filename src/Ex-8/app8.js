//Escribe un programa que pida una frase y escriba las vocales que aparecen
//Crear sítio donde ponemos al input en index.html.
// Identificar el espacio que creamos en index para que JS reconozca.
// Creamos una función que captura la frase de el input insertado por los usuários.
// Creamos una función que determina cual son las vogales atravesando todas las letras de la frase.
//imprimir en pantalla.

let phrase = prompt("Introduce una frase:");

let characternumber = phrase.length; //Devuelve la longitud del string.

phrase = phrase.toUpperCase(); //Devuelve el string en mayúsculas.


let i;     

for ( i= 0 ; i <characternumber; i++) {
  
   if (phrase.substring (i, 1) === "A" || phrase.substring (i, 1)== "E" || phrase.substring(i, 1) === "I" || phrase.substring(i, 1) === "O" || phrase.substring (i, 1) === "U" ) {
    //substring() es un método para extraer una subcadena de texto de una cadena más grande, dadas las posiciones inicial y final dentro de la cadena.
    //recupera el caracter i del string.
    document.write( "Número de Vocales:" + phrase.substring(0, i) + ".");
   }
}