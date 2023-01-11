// Escribe un programa que pida el nombre del usuario con un input y escriba un texto que diga “Hola <nombre-de-usuario>”
// Crear sitio donde ponemos al input en index.html.
// Identificar el espacio que creamos en idex para que Js reconozca.
// Creamos una función que captura los nombres de los inputs insertados por los usuários.
// Imprimimos en consola con console.log.

function capture(){

    const username = document.getElementById("username").value;
    console.log("Hola " + username)

}
