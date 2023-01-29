//Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible).
//Crear sítio donde ponemos al input en index.html.
// Identificar el espacio que creamos en index para que JS reconozca.
// Creamos una función que captura el numero del input insertado por los usuários.
// Creamos una función que determina si el numero elegido es divisible por 2, 3, 5 o 7.
// Imprimir en pantalla que el numero elegido es divisible por los que es divisible.

let number = prompt ("Escribe un número");
if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0 || number % 7 === 0){
    if (number % 2 === 0) {
        document.write(number + " " + "es divisible por 2." + " ");
    }
    if(number % 3 === 0){35
        document.write(number + " " + "es divisible por 3." + " ");
    }
    if(number % 5 ===0){
        document.write(number + " " + "es divisible por 5." + " ");
    }
    if(number % 7 === 0){
        document.write(number + " " + "es divisible por 7.");
    }
}else{
    
    document.write(number + " " + "No es divisible ni por 2, ni por 3, ni por 5, ni por 7.");
}

