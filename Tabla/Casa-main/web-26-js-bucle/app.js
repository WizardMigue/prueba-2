// Varios bucles
let i = 0;
let conjunto = [10, 23, "Juan", false, 34];
while (i < conjunto.length) {
    console.log(conjunto.length);
    alert("La posición " + i + " es " + conjunto[i]);
    i = i + 1;
}
alert("Hemos acabado")
let numeros = [3, 4, 5, 6, 7, 8, 9, 10];
i = 0;
while (i < numeros.length) {
    numeros[i] = numeros[i] + 1;
    i++; //equivale a i=i+1;
}
console.log(numeros);

// Bucle lista
let ls = document.getElementById("lista");
while ( i < ls.children.length) {
    let hijo = ls.children[i];
    hijo.innerHTML+=".";
    i++;
}
for (let i = 0; i < ls.children.length; i++) {
    ls.children[i].innerHTML+=".";
}
for (let i = 0; i < ls.children.length; i++) {
    if (i == 1 || i==3){
        ls.children[i].style.color="red";    
    }
}
let artistas = ["Amaral", "Estopa", "EL canto del lobo", "Rosalia", "C tangana", "Vetusta Morla", "Tatchenko", "Mago de Oz", "Héroes del silencio", "La polla Records"];
for (let i = 0; i < artistas.children.length.length; i++) {
    
    
}