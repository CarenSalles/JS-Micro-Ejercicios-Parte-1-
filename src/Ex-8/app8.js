//Escribe un programa que pida una frase y escriba las vocales que aparecen
//Crear sítio donde ponemos al input en index.html.
// Identificar el espacio que creamos en index para que JS reconozca.
// Creamos una función que captura la frase de el input insertado por los usuários.
// Creamos una función que determina cual son las vogales atravesando todas las letras de la frase.
//imprimir en pantalla.

let phrase = prompt("Introduce una frase:");

let phraseToUppercase = phrase.toUpperCase(); //Devuelve el string en mayúsculas.

let amountOfCharacters = phrase.length; //Devuelve la longitud del string.

let vowelsInPhrase = []


for ( let i= 0 ; i < amountOfCharacters; i++) {
  
   if (phraseToUppercase.substring (i, 1) === "A" || phraseToUppercase.substring (i, 1)== "E" || phraseToUppercase.substring(i, 1) === "I" || phraseToUppercase.substring(i, 1) === "O" || phraseToUppercase.substring (i, 1) === "U" ) {
         //filtrar phraseToUppercase //El método match() devuelve todas las ocurrencias de una expresión regular dentro de una cadena.
         // devolver el valor del array
         // .push a vowelsInPhrase


    //substring() es un método para extraer una subcadena de texto de una cadena más grande, dadas las posiciones inicial y final dentro de la cadena.
    //recupera el caracter i del string.
   //  console.log( "Número de Vocales:" + phrase.substring(0, i) + ".");
   console.log('phrase', phrase);
   console.log('amount', amountOfCharacters);
   console.log('uppercase', phraseToUppercase);

   }
}