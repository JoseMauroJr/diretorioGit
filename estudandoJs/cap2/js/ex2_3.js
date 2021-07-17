/*Programa lê o modelo e preço do veículo, apresenta como 
resposta o valor da entrada(50%) e saldo em 12x */
function mostrarPromocao() {
    //cria referência aos elementos manipulados pelo programa 
    let inVeiculo = document.getElementById('inVeiculo')
    let inPreco = document.getElementById('inPreco')
    let outVeiculo = document.getElementById('outVeiculo')
    let outEntrada = document.getElementById('outEntrada')
    let outParcela = document.getElementById('outParcela')

    //obtém conteúdo dos campos de entrada
    let veiculo = inVeiculo.value
    let preco = Number(inPreco.value)

    //calcula valor da entrada e das parcelas
    let entrada = preco * 0.50
    let parcela = (preco * 0.50) / 12

    //altera o conteúdo dos parágrafos de resposta
    outVeiculo.textContent = 'Promoção: ' + veiculo
    outEntrada.textContent = 'Entrada de R$: ' + entrada.toFixed(2)
    outParcela.textContent = '+12x de R$: ' + parcela.toFixed(2)
}
/* cria uma referência ao elemento btVerPromocao (botão)
registra um evento associado ao botão, para carregar um função
*/
let btVerPromocao = document.getElementById('btVerPromocao')
btVerPromocao.addEventListener('click', mostrarPromocao)