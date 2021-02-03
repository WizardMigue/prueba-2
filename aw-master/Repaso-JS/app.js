alert('JS Funciona');
function saludar(nombre) {
    alert('Hola ' + nombre);
}
saludar("Miguel");
setInterval(saludar,2000,["Miguel"]);
alert("Hola Mundo");