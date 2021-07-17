/*Programa de promoção de uma farmácia na compra de duas unidade de um mesmo
medicamento, o cliente recebe como desconto os centavos do valor total */
function calcularPromocao() {
    //cria referência dos elementos da página
    let inMedicamento = document.getElementById('inMedicamento')
    let inPreco = document.getElementById('inPreco')
    let outResposta = document.getElementById('outResposta')
    let outPromocao = document.getElementById('outPromocao')

    //obtém conteúdo dos campos de entrada
    let medicamento = inMedicamento.value
    let preco = Number(inPreco.value)

    //calcula o valor da promoção
    let promocao = Math.floor(preco * 2)
    //altera o conteúdo da linha de resposta
    outResposta.textContent = 'Promoção de ' + medicamento
    outPromocao.textContent = 'Leve 2 por apenas R$: ' + promocao.toFixed(2)
}
// cria referência ao elemento btMostrar e registra um evento associado ao botão
let btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', calcularPromocao)