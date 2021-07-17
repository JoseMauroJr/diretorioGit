function verificarNumero() {
    //cria referência aos elementos da página
    var inNum = document.getElementById('inNum')
    var outDivisores = document.getElementById('outDivisores')
    var outResposta = document.getElementById('outResposta')

    //obtém dados de entrada
    var num = Number(inNum.value)

    //validar o número
    if (num == 0 || isNaN(num)) {
        alert('Informe número válido...')
        inNum.focus()
        return
    }

    //como 1 é um divisor universal, já iniciamos com ele
    var divisores = 'Divisores do ' + num + ': 1'
    var soma = 1

    //percorre os possíveis divisores e acumula
    for (var i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            divisores = divisores + ', ' + i    //evita o última virgula
            soma = soma + i
        }
    }
    divisores = divisores + ' (Soma: ' + soma + ')'

    //altera o conteúdo de outDivisores
    outDivisores.textContent = divisores

    //verificar se perfeito e exibe resposta na tag outResposta
    if (num == soma) {
        outResposta.textContent = num + ' É um Número Perfeito!'
    } else {
        outResposta.textContent = num + ' Não é um Número Perfeito!'
    }
}

//referencia ao elemento botão e adicionar evento click
var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarNumero)