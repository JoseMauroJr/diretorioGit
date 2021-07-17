function mostrarEvolucao() {
    //cria referência dos elementos da página
    var inChin = document.getElementById("inChin");
    var inAnos = document.getElementById("inAnos");
    var outEvolucao = document.getElementById("outEvolucao");

    //obtém dados de entrada
    var chin = Number(inChin.value);
    var anos = Number(inAnos.value);

    //validar os números (deve ser no mínimo um casal)
    if (chin < 2 || isNaN(chin) || anos == 0 || isNaN(anos)) {
        alert("Informe corretamente os dados...")
        inChin.focus()
        return;
    }

    //cria uma variável do tipo string para concatenar a resposta
    var resp = "";
    var total = chin;

    //criar um laço de repetição
    for (var i = 1; i <= anos; i++) {
        resp = resp + i + " º Anos " + total + " Chinchilas\n";
        total = total * 3;
    }
    //altera conteúdo da teg de resposta
    outEvolucao.textContent = resp;
    //console.log(outEvolucao.textContent = resp);

}
//cria referência do botão da página adicinar ao um evento
var btMostrar = document.getElementById("btMostrar");
btMostrar.addEventListener("click", mostrarEvolucao);