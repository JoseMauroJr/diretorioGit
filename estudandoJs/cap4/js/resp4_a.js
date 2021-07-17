function repetirFruta() {
    var inFruta = document.getElementById("inFruta");
    var inNumero = document.getElementById("inNumero");
    var outResposta = document.getElementById("outResposta");

    var fruta = inFruta.value;
    var num = Number(inNumero.value);

    if (fruta == "" || num == 0 || isNaN(num)) {
        alert("Informe corretamentes os dados...");
        inNumero.focus();
        return;
    }

    var resposta = "";      //variável que vai acumular número de repetição das frutas

    //cria um laço repetidor
    for (var i = 1; i < num; i++) {
        resposta = resposta + fruta + " * ";    //cada volta do laço adiciona uma fruta
    }

    //isolar a última fruta, para não não exibir * no final
    resposta = resposta + fruta;

    outResposta.textContent = resposta;
}
//criar refêrencia de botão da página e adicionar evento
var btRepetir = document.getElementById("btRepetir");
btRepetir.addEventListener("click", repetirFruta);