// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigoSorteado = "";


function sortearAmigo(){
    if (amigos.length === 0) {
        alert('Por favor, inserte al menos un nombre'); 
    } else {
    let amigoSorteado= amigos[Math.floor(Math.random() * amigos.length)];
    modificarTexto("resultado", amigoSorteado);
    }
    return;
}
function limpiartexto(){
    document.getElementById("amigo").value = "";
    return;
}
function agregarAmigo(){
        let amigo = document.getElementById('amigo').value; 
        console.log(amigo)   
    if (amigo == ""){
        alert('Por favor inserte un nombre')
    } else{
     amigos.push(amigo); 
        limpiartexto();
        listaDeAmigos(amigos);
    }
    return;
}
function modificarTexto(elemento,texto){
    let modifico = document.getElementById(elemento)
    modifico.innerHTML =texto;
    return;
    
}
function listaDeAmigos () {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
    return;
}
