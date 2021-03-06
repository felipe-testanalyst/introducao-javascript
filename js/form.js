var botaoAdiciona = document.querySelector("#adicionar-paciente"); //traz o botao do html

botaoAdiciona.addEventListener("click", function(event){  //adiciona evento ao botao
    event.preventDefault();                               // prevem o botao de realizar o comportamento padrao do form

    var form = document.querySelector("#form-adiciona");  // traz o formulario

    var paciente = obtemPacienteDoForm(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPacientes(paciente);

    if (erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacientesNaTabela(paciente);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function obtemPacienteDoForm(form){
    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
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

function adicionaPacientesNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function validaPacientes(paciente){
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O nome nao pode ser em branco");
    }

    if (!isNaN(paciente.nome)){
        erros.push("Nome nao pode conter numeros");
    }

    if(paciente.peso.length == 0){
        erros.push("O peso nao pode ser em branco");
    }

    if(paciente.altura.length == 0){
        erros.push("A Altura nao pode ser em branco");
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura nao pode ser em branco");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso invalido");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura Invalida");
    }

    if(!validaGordura(paciente.gordura)){
        erros.push("Gordura invalida");
    }

    return erros;

}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}