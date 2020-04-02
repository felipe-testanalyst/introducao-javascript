var botaoAdiciona = document.querySelector("#adicionar-paciente"); //traz o botao do html

botaoAdiciona.addEventListener("click", function(event){  //adiciona evento ao botao
    event.preventDefault();                               // prevem o botao de realizar o comportamento padrao do form

    var form = document.querySelector("#form-adiciona");  // traz o formulario

    var paciente = obtemPacienteDoForm(form);

    var pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes"); //traz a tabela pacientes
    tabela.appendChild(pacienteTr);   //anexa a nova TD a tabela
    form.reset();

});

function obtemPacienteDoForm(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.altura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    
    var pacienteTr = document.createElement("tr");      //Cria a TR (linha) para adicao das celulas (TD)
    pacienteTr.classList.add("paciente");               //Adiciona classe

    //anexa as TD a TR
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); //chama a monta td e passa o dado do paciente e a classe
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}