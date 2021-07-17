/*Programa de uma Lan House lê o valor de cada 15 minutos de uso um computador
e o tempo de uso por um cliente em minutos, e informe o valor a ser pago pelo cliente */
function calcularValorPagar() {
    //cria referência aos elementos da página
    let inValor = document.getElementById('inValor')
    let inTempo = document.getElementById('inTempo')
    let outResposta = document.getElementById('outResposta')

    //obtém o conteúdo dos campos de entrada
    let valor = Number(inValor.value)
    let tempo = Number(inTempo.value)

    //calcula o valor a ser pago
    let pagar = Math.ceil(tempo / 15) * valor 

    //altera o conteúdo do campo de resposta
    outResposta.textContent = 'Valor a Pagar R$: ' + pagar.toFixed(2)
}
//crie referência ao botão e registra um evento ao botão
let btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularValorPagar)