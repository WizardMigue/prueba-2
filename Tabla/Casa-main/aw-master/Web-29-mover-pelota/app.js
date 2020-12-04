let bola = document.getElementById("bola");
function moverBola(evento) {
    console.log(evento);
    let posX = bola.x;
    let posY = bola.y;
    if (evento.key == "ArrowUp") {
        bola.style.top = posY - 1 + "px";
    } else if (evento.key == "ArrowDown") {
        bola.style.top = posY + 1 + "px";
    } else if (evento.key == "ArrowLeft") {
        bola.style.left = posX - 1 + "px";
    } else if (evento.key == "ArrowRight") {
        bola.style.left = posX + 1 + "px";
    }
}