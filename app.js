let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
return;
}
function verificarIntento(){
let  numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
console.log(intentos);

if (numeroDeUsuario === numeroSecreto){
    asignarTextoElemento("p",`acertaste el numero en ${intentos} ${(intentos === 1)? "vez" : "veces"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("P", "El numero secreto es menor");
        } else {
            asignarTextoElemento("P", "El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja ();

    }

    return;
}

function limpiarCaja (){
    let valorCaja = document.querySelector("#valorUsuario");
    valorCaja.value = "";

}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1; 
    console.log (numeroGenerado);
    console.log (listaNumerosSorteados);
if (listaNumerosSorteados.length == numeroMaximo) {
asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
}else{
    
}

    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    } 
}
function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego del numero secreto");
asignarTextoElemento("p", `Indica un numero entre 1 y ${numeroMaximo}` )
numeroSecreto =generarNumeroSecreto();
intentos = 1;

}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //generar el numero aleatorio
   //inicializar el numero intentos
    //deshabilitar el boton nuevo juego
document.querySelector("#reiniciar").setAttribute("disabled", "true");

    
}
condicionesIniciales();