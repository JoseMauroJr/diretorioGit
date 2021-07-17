function verificarPrimo() {
    //cria referência aos elementos da página
    var inNum = document.getElementById("inNum");
    var outResposta = document.getElementById("outResposta");

    var num = Number(inNum.value);      //obtém o número informado

    //verifica se preencheu corretamente o campo inNum
    if (num == 0 || isNaN(num)) {
        alert("Número Inválido...");
        inNum.focus();
        return;
    }

    var numDivisores = 0;   //declara e inicializa contador

    //percorre todos os possíveis divisores do número
    for (var i = 1; i <= num; i++) {
        //verifica se i (1, 2, 3...) é divisor do num
        if (num % i == 0) {
            numDivisores++;     //se é, incrementa contador
        }
    }

    //se possui apenas 2 divisores, é primo
    if (numDivisores == 2) {
        outResposta.textContent = num + " É primo";
    } else {
        outResposta.textContent = num + " Não é primo"
    }
}
//referencia elemento e após associa function ao evento click
var btVerificar = document.getElementById("btVerificar");
btVerificar.addEventListener("click", verificarPrimo);