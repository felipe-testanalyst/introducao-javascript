var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); //busca lista de pacientes pela classe .paciente

for(var i = 0; i < pacientes.length; i++){ //inicializa o loop

    var paciente = pacientes[i]; //define a variavel paciente pare receber o paciente na posicao inicial

    //busca as informacoes do paciente dentro da variavel paciente
    var tdPeso = paciente.querySelector(".info-peso");      
    var tdAltura = paciente.querySelector(".info-altura");  
    var tdImc = paciente.querySelector(".info-imc");        

    var peso = tdPeso.textContent;                          // converte o tdPeso para texto e coloca na variavel peso
    var altura = tdAltura.textContent;                      // converte o tdAltura para texto e coloca na variavel altura

    //inicializa variavel como falsa para validacao
    var pesoValido = true;                                  
    var alturaValido = true;                                

    if(peso <= 0 || peso >= 1000){                          //validacao
        pesoValido = false                                  // caso o if seja true muda a variavel para false
        tdImc.textContent = "Peso invalido"                 //adiciona texto de validacao no tdImc
        paciente.classList.add("paciente-invalido");        //adiciona classe no paciente com peso invalido para alterara o css da pagina      

    }

    if(altura <= 0 || altura >= 3.00){
        alturaValido = false
        tdImc.textContent = "Altura invalida"
        paciente.classList.add("paciente-invalido");     
    }

    if(pesoValido && alturaValido){                         //caso as variaveis de validacao nao mudem para falso
        var imc = peso / (altura*altura);                   // calcula imc
        tdImc.textContent = imc.toFixed(2);                //adiciona imc calculado na tdImc para todos os pacientes do loop
    }

}

var botaoAdiciona = document.querySelector("#adicionar-paciente"); //traz o botao do html

botaoAdiciona.addEventListener("click", function(event){  //adiciona evento ao botao
    event.preventDefault();                               // prevem o botao de realizar o comportamento padrao do form

    var form = document.querySelector("#form-adiciona");  // traz o formulario

    //variaveis para captura dos valores do formulario
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.altura.value;

    var pacienteTr = document.createElement("tr");      //Cria a TR (linha) para adicao das celulas (TD)

    //cria as TD (celulas)
    var nomeTd = document.createElement("td");      
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    //atribui os valores das variaveis para as celulas
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

    //anexa as TD a TR
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes"); //traz a tabela pacientes

    //anexa a nova TD a tabela
    tabela.appendChild(pacienteTr);

    




    



});

