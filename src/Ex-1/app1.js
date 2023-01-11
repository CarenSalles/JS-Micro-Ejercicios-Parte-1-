// Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”.
// Crear sitio donde ponemos al h1 en index.html
//Identificar el espacio que creamos en idex para que Js reconozca.
// Creamos el texto a insertar en documento Js.
// Llamamos al espacio reservado en html.
//Imprimilo en pantalla.

const saludo = "<h1>Hello Javascript</h1>";
const contenedor = document.getElementById('saludo');


function insertarH1(){
    contenedor.innerHTML = saludo;
}
insertarH1();

