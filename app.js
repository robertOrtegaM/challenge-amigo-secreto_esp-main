// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosSecretos = [];
let amigoSorteado = "";


function sortearAmigo(){
    let amigoSorteado= amigosSecretos[Math.floor(Math.random() * amigosSecretos.length)];
    console.log(amigoSorteado);
    editarLisadosHTML("ul", amigoSorteado);
    return;
}
function limpiartexto(){
    document.getElementById("amigo").value = "";
    return;
}
function agregarAmigo(){
    amigosSecretos.push(document.getElementById("amigo").value);
    limpiartexto();
    editarLisadosHTML("ul", amigosSecretos.join(", "));
    return;
}
function    editarLisadosHTML(elemento, texto){
    let lista = document.querySelector(elemento);
    lista.innerHTML = texto;
    return;
}




