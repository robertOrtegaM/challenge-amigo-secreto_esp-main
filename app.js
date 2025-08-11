// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigoSorteado = "";


function sortearAmigo(){
    let amigoSorteado= amigos[Math.floor(Math.random() * amigos.length)];
    console.log(amigoSorteado);
    modificarTexto('resultado',amigoSorteado)
    return;
}
function limpiartexto(){
    document.getElementById("amigo").value = "";
    return;
}
function agregarAmigo(){
        let amigos = document.getElementById('amigo').value; 
        console.log(amigos)   
    if (amigos == ""){
        alert('Por favor inserte un nombre')
    } else{
     amigos.push(amigos); 
        limpiartexto();
    }
    return;
}
function listaDeAmigos () {
    let lista = document.getElementById('lista');
    lista.innerHTML = "";
    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
    return;
}
function modificarTexto(elemento,texto){
    let modifico = document.getElementById(elemento)
    modifico.innerHTML =texto;
    return;
    
}
console.log (amigos)
