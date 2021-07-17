//decla e inicializa contadores e acumuladores (variáveis globais)
var numContas = 0;
var valTotal = 0;

//variável string que acumula as contas
var resposta = "";

function registrarConta() {
    //cria referência aos elementos da página manipulados pela function
    var inDesc = document.getElementById("inDesc");
    var inValor = document.getElementById("inValor");
    var outLista = document.getElementById("outLista");
    var outTotal = document.getElementById("outTotal");

    //obtém conteúdo dos campos
    var desc = inDesc.value;  
    var valor = Number(inValor.value);

    //verifica preenchimento dos campos
    if (desc == "" || valor == 0 || isNaN(valor)) {
        alert('Informe os dados corretamente...');
        inDesc.focus();
        return;
    }

    //adiciona valores ao contador e acumulador
    numContas++;
    valTotal = valTotal + valor;

    //concatena as contas
    resposta = resposta + desc + " - R$: " + valor.toFixed(2) + "\n";

    //altera o conteúdo das tag de resposta
    outLista.textContent = resposta + "--------------------------";
    outTotal.textContent = numContas + " Contas(s) - Total R$: " + valTotal.toFixed(2);

    //limpa campos e posiciona cursor em inDescricao
    inDesc.value = "";
    inValor.value = "";
    inDesc.focus();
}
//referencia elemento e após associa function ao evento click
var btRegist = document.getElementById("btRegist");
btRegist.addEventListener("click", registrarConta);