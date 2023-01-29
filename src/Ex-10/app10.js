// Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales
// Crear sítio donde ponemos al input en index.html.
// Identificar el espacio que creamos en index para que JS reconozca.
// Creamos una función que captura la frase de el input insertado por los usuários.
// Creamos una función que determina cual son las vocales atravesando todas las letras de la frase.
// Imprimir en pantalla las vocales de la frase.


let phrase = prompt ("Escriba una frase");
let phraseToUppercase = phrase.toUpperCase();
let vowelstotal = ["a", "e", "i", "o", "u"]
counter = 0;

for (let i = 0; i < phrasephraseToUppercase.length; i++) {
    if (phrase[i] == "A" ||
    phrase[i] == "E" ||
    phrase[i] == "I" ||
    phrase[i] == "O" ||
    phrase[i] == "U" ) {

    counter++;
    }

}

console.log(vowelstotal + counter);
