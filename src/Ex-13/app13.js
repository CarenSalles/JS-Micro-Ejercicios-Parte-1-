//Escribir un programa que escriba en pantalla los divisores de un número dado.
//Crear sítio donde ponemos al input en index.html.
// Identificar el espacio que creamos en index para que JS reconozca.
// Creamos una función que captura el numero del input insertado por los usuários.
// Creamos una función que determina los divisores de un  numero elegido.
// Imprimir en pantalla los todos los divisores del numero elegido.




let number = prompt("Escribe un número");
let i;

//Un número deficiente es todo número natural que cumple que la suma de sus divisores propios es menor que el propio número. Por ejemplo, 16 es un número deficiente ya que sus divisores propios son 1, 2, 4 y 8 y se cumple que 1+2+4+8=15, que es menor que 16. 

for ( i = 2; i <= number/2; i++) {  
    if (number % i === 0) {
        document.write(i,", ");
    }
}