var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);

var tdPeso = document.querySelector(".info-peso");
var peso = tdPeso.textContent;
console.log(peso);

var tdAltura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(altura);

var tdImc = document.querySelector(".info-imc");
console.log(tdImc);

var pesoValido = true;
var alturaValido = true;

if(peso <= 0 || peso >= 1000){
    pesoValido = false
    tdImc.textContent = "Peso invalido"
}

if(altura <= 0 || altura >= 3.00){
    alturaValido = false
    tdImc.textContent = "Altura invalida"
}

if(pesoValido && alturaValido){
    var imc = peso / (altura*altura);
    console.log(imc);

    tdImc.textContent = imc;
}