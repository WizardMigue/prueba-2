function OcultarParrafo() {
    let parrafo = document.getElementById("parrafo1");
    console.log(parrafo);
    parrafo.classList.add("oculto");
}
function MostrarParrafo() {
    let parrafo = document.getElementById("parrafo1");
    parrafo.classList.remove("eliminar");
}