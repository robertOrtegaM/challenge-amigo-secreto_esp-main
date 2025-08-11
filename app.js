// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let amigoSorteado = "";


function sortearAmigo(){
    let amigoSorteado= amigos[Math.floor(Math.random() * amigos.length)];
    modificarTexto("resultado", amigoSorteado);
    return amigoSorteado;
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
    }
    return;
}
function modificarTexto(elemento,texto){
    let modifico = document.getElementById(elemento)
    modifico.innerHTML =texto;
    return;
    
}

