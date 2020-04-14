var campoInput = document.querySelector("#filtro-tabela");

campoInput.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    
    if (this.value.length > 0){

        for(var i = 0; i < pacientes.length; i++ ){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var exp = new RegExp(this.value, "i");  //Regular expressions set up valor com flag de insensitive for uppercase

            if(exp.test(nome)){                     // Testa a regular expression contra o nome do paciente. Se for diferente:
                paciente.classList.remove("invisivel"); //remove a classe invisivel criada no Css para nao display a linha
            }else{
                paciente.classList.add("invisivel");  //se for igual adiciona a classe e a linha fica invisivel
            }
        }
    }else{
        for(var i = 0; i < pacientes.length; i++){   //caso o paciente nao tenha valor remove a classe invisivel e todas as linhas ficam visiveis
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});