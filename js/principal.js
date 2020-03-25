var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); //busca lista de pacientes pela classe .paciente
console.log(pacientes);

for(var i = 0; i < pacientes.length; i++){ //inicializa o loop

    var paciente = pacientes[i]; //define a variavel paciente pare receber o paciente na posicao inicial

    var tdPeso = paciente.querySelector(".info-peso");      //busca a informacao de peso do paciente dentro da variavel paciente acima
    var tdAltura = paciente.querySelector(".info-altura");  //busca a informacao de altura do paciente dentro da variavel paciente acima
    var tdImc = paciente.querySelector(".info-imc");        //busca a informacao de imc do paciente dentro da variavel paciente acima

    var peso = tdPeso.textContent;                          // converte o tdPeso para texto e coloca na variavel peso
    var altura = tdAltura.textContent;                      // converte o tdAl;tura para texto e coloca na variavel altura

    var pesoValido = true;                                  //inicializa variavel como falsa para validacao de peso
    var alturaValido = true;                                //inicializa variavel como falsa para validacao de altura

    if(peso <= 0 || peso >= 1000){                          //validacao
        pesoValido = false                                  // caso o if seja true muda a variavel para false
        tdImc.textContent = "Peso invalido"                 //adiciona texto de validacao no tdImc
    }

    if(altura <= 0 || altura >= 3.00){
        alturaValido = false
        tdImc.textContent = "Altura invalida"
    }

    if(pesoValido && alturaValido){                         //caso as variaveis de validacao nao mudem para falso
        var imc = peso / (altura*altura);                   // calcula imc
        tdImc.textContent = imc.toFixed(2);                //adiciona imc calculado na tdImc para todos os pacientes do loop
    }

}