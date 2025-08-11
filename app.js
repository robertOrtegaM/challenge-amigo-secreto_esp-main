// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigoSorteado = "";


function sortearAmigo(){
    let amigoSorteado= amigos[Math.floor(Math.random() * amigos.length)];
    console.log(amigoSorteado);
    return amigoSorteado;
}
function limpiartexto(){
    document.getElementById("amigo").value = "";
    return;
}
function agregarAmigo(){
    amigosSecretos.push(document.getElementById("amigo").value);
    limpiartexto();
    return amigosSecretos;
}
function sortear(){
    
}
