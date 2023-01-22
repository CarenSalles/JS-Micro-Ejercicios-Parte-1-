//Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.
// Crear sítio donde ponemos al input en index.html.
// Identificar el espacio que creamos en index para que JS reconozca.
// Creamos una función que captura la frase de el input insertado por los usuários.
// Creamos una función que determina cual son las vocales a atravesando todas las letras de la frase.
// Imprimir en pantalla las vocales de la frase.


// let phrase = prompt("Introduce la frase:");

// function vowelCounter(phrase){
//     let voweltotal = "aeiouAEIOU";
//     let vowelCounter = 0;

//El método indexOf() devuelve el índice, dentro del objeto String que realiza la llamada, de la primera ocurrencia del valor especificado, comenzando la búsqueda desde indiceDesde; o -1 si no se encuentra dicho valor.
//Un ciclo for se repite hasta que una condición especificada se evalúe como false.
//Se ejecuta la expresión de iniciación expresiónInicial, si existe. Esta expresión normalmente inicia uno o más contadores de bucle.
//Se evalúa la expresión expresiónCondicional. Si el valor de expresiónCondicional es verdadero, se ejecutan las instrucciones del bucle. Si el valor de condición es falso, el bucle for termina.

//   for (let i = 0; i < phrase.lstring; i++) {
//     if(voweltotal.indexOf(phrase[i]) !== -1){
//         console.log("El valor de vocales en la frase es: " + phrase[i]);
//         vowelCounter = +1;
//     }
//   }
//   return vowelCounter;
// }
//  console.log(vowelCounter(phrase));



let phrase = prompt("Introduce una frase:");

let vowelstotal = ["a", "e", "i", "o", "u"];

//La declaración for...of crea un bucle que se repite sobre objetos iterables (incluidos Array, Map (en-US), Set, objetos arguments y así sucesivamente), invocando un bucle de iteración personalizado con declaraciones que se ejecutarán para el valor de cada distinta propiedad.

function vowelCounter(phrase) {
    let vowelCounter = 0;
    
    for (let i of phrase.toLowerCase()) {
        if (vowelstotal.includes(i)){
        vowelCounter ++;
        }
    }
        console.log(`La frase conten ${vowelCounter} vocales`);
        return vowelCounter;
    }

    vowelCounter(phrase);
