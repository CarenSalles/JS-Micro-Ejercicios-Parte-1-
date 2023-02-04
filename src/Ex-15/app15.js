//Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad).
//Crear sítio donde ponemos al input en index.html.
// Identificar el espacio que creamos en index para que JS reconozca.
// Creamos una función que captura el numero del input insertado por los usuários.
// Creamos una función que determina los divisores de un  numero elegido.
//Ceamos una otra funcion para determinar se el numero es divisible solo por el mismo o por la unidad.
// Imprimir en pantalla si el número es primo o no.


let number = prompt("Escribe un número");
let i;
let primeNumber = true; // acá determina que si el número es primo es verdadero.
for (let i = 2; i < number/2 ; i++){     //Función que determina que si el numero dividido por el numero index resta zero, el numero no es primo o sea primo es falso.
    if (number % i === 0) {

        primeNumber = false;
        
    }
}

// Función que escribe en pantalla si el numero es primo o no.
if (primeNumber) {
    document.write("El número" + " " + number + " " + "es primo.");
} else {
    document.write("El número" + " " + number + " " + "no es primo.");
}


//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX