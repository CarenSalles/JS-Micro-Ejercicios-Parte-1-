//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
// Crear sítio donde ponemos al input en indexedDB.html.
// Identificar el espacio que creamos en index para que JS reconozca.
// Creamos una función que captura los numeros de los inputs insertados por los usuários.
// Creamos una función que determina cual el numero mayor y que imprima en pantalla.//


function submitNumbOne() {
    let number1 = document.getElementById("number1input").value;
    // console.log("número 1: ", number1);
    // console.log = ("Lo numero mayor es " + comparation);
}

function submitNumbTwo() {
    let number2 = document.getElementById("number2input").value;
    // console.log("número 2: ", number2);
    // console.log = ("Lo numero mayor es " + comparation);
}

function compareNumbers() {
    // pasar el valor de number1 y number2 para compararlos
    let number1 = document.getElementById("number1input").value;
    let number2 = document.getElementById("number2input").value;

        if(number1 > number2) {
            console.log("El número 1 es mayor que el número 2");
        } else {
            console.log("El número 2 es mayor que el número 1");

        }

 
    // if (this.number1 > this.number2) {
    //     console.log("El número es mayor", this.number1);
    
    // } else {
    //     console.log(number2);
    // }
}

    
// const number1 = prompt("Escriba un número");
// const number2 = prompt("Escriba otro número");


// function comparation() {

//     if (number1 > number2) {
//         console.log(number1);
    
//     } else {
//         console.log(number2);
//     }
// }






 
