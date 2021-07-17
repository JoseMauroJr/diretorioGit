/*Programa para um restaurante que lê o preço por kg e consumo (em grama)
de um cliente, exibe o valor a ser pago */
function calcularPreco() {
    //cria referência aos elementos da página
    let inQuilo = document.getElementById('inQuilo')
    let inConsumo = document.getElementById('inConsumo')
    let outValor = document.getElementById('outValor')

    //obtém conteúdo dos campos de entrada
    let quilo = Number(inQuilo.value)
    let consumo = Number(inConsumo.value)

    //calcula valor a ser pago e altera o conteúdo da linha de resposta
    let valor = (quilo / 1000) * consumo
    outValor.textContent = 'Valor a pagar R$: ' + valor.toFixed(2)
}
/*cria referência ao elemento btCalcular e registra um evento 
associado ao botão, para carregar uma função */
let btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularPreco)