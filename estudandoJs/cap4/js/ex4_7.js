function preencherEstrelas() {
    //cria referência aos elementos da página
    var inNum = document.getElementById("inNumero");
    var outEspacos = document.getElementById("outEspacos");

    var num = Number(inNum.value);      //obtém conteúdo do campo inNum

    if (num == 0 || isNaN(num)) {
        alert("Número Inválido...");
        inNum.focus();
        return;
    }

    var estrelas = "";      //declara variável que irá concatenar as estrelas/traços

    //cria um laço de repetição de 1 até o número informe
    for (var i = 1; i <= num; i++) {
        if (i % 2 == 1) {
            estrelas = estrelas + "*";      //na posição impar do i: *
        } else {
            estrelas = estrelas + "-";      //na posição par: -
        }
    }

    outEspacos.textContent = estrelas;      //exibe as estrelas
}
//cria referência ao botão e após associa function ao evento click
var btPreencher = document.getElementById("btPreencher");
btPreencher.addEventListener("click", preencherEstrelas);