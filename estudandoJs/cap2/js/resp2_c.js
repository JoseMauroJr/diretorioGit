/*Programa de supermercado lê descrição e preço do produto
 e exibe a mensagem 50% de esconto na compra do terceiro produto */
function verPromocao() {
    //crie referência aos elementos da página
    let inProduto = document.getElementById('inProduto')
    let inPreco = document.getElementById('inPreco')
    let outPromocao = document.getElementById('outPromocao')
    let outTerceiro = document.getElementById('outTerceiro')

    //obtém o conteúdo dos campos entrada
    let produto = inProduto.value
    let preco = Number(inPreco.value)

    //calcula a promoção
    let terceiro = preco / 2
    let promocao = (preco * 2) + terceiro

    //altera o conteúdo do campo de resposta
    outPromocao.textContent = produto + ' - Promoção Leve 3 por R$: ' + promocao.toFixed(2)
    outTerceiro.textContent = 'O 3º produto custa apenas R$: ' + terceiro.toFixed(2)
}
//cria referência ao botão e registra um evento ao botão
let btVer = document.getElementById('btVer')
btVer.addEventListener('click', verPromocao)