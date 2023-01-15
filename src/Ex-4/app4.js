//Escribe un programa que pida dos números y escriba “La suma de <numero-uno> con <numero-dos> es <resultado>”.
// Crear sitio donde ponemos al input en index.html.
// Identificar el espacio que creamos en idex para que Js reconozca.
// Creamos los valores con variables al numeros 3 y 5.
// Sumar los valores.
// Escribir el texto a insertar.
// Llamamos al espacio reservado.
// Insertamos el texto en espacio reservado.
// Imprimilo en pantalla.



const numero1 = 3;
const numero2 = 5;
const resultado = numero1 + numero2;
const respuesta = `La suma de ${numero1} + ${numero2} es ${resultado}.`;
const contenedor = document.getElementById('resultado-suma');

console.log(respuesta);
document.write(respuesta);
contenedor.innerHTML = respuesta;

