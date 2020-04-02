var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); //busca lista de pacientes pela classe .paciente

for(var i = 0; i < pacientes.length; i++){ //inicializa o loop

    var paciente = pacientes[i]; //define a variavel paciente pare receber o paciente na posicao inicial

    //busca as informacoes do paciente dentro da variavel paciente
    var tdPeso = paciente.querySelector(".info-peso");      
    var tdAltura = paciente.querySelector(".info-altura");  
    var tdGordura = paciente.querySelector(".info-gordura");
    var tdImc = paciente.querySelector(".info-imc");        

    var peso = tdPeso.textContent;                          // converte o tdPeso para texto e coloca na variavel peso
    var altura = tdAltura.textContent;                      // converte o tdAltura para texto e coloca na variavel altura
    var gordura = tdGordura.textContent;                      

    //inicializa variavel e chama validacao
    var pesoValido = validaPeso(peso);                                  
    var alturaValido = validaAltura(altura);   
    var gorduraValido = validaGordura(gordura);                             

    if(!pesoValido){                          //validacao
        pesoValido = false                                  // caso o if seja true muda a variavel para false
        tdImc.textContent = "Peso invalido"                 //adiciona texto de validacao no tdImc
        paciente.classList.add("paciente-invalido");        //adiciona classe no paciente com peso invalido para alterara o css da pagina      

    }

    if(!alturaValido){
        alturaValido = false
        tdImc.textContent = "Altura invalida"
        paciente.classList.add("paciente-invalido");     
    }

    if(!gorduraValido){
        gorduraValido = false
        tdGordura.textContent = "Gordura invalida"
        paciente.classList.add("paciente-invalido");     
    }

    if(pesoValido && alturaValido){                         //caso as variaveis de validacao nao mudem para falso
        tdImc.textContent = calculaImc(peso, altura);                //adiciona imc calculado na tdImc para todos os pacientes do loop
    }

}

function calculaImc(peso, altura){
    var imc = peso / (altura*altura); 
    return imc.toFixed(2);

}   

function validaPeso(peso){
    if(peso>0 && peso<1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura>0 && altura <=3.00){
        return true;
    }else{
        return false;
    }
}

function validaGordura(gordura){
    if(gordura>0 && gordura <=100){
        return true;
    }else{
        return false;
    }
}

