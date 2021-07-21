var numeros = []        //cria um vetor global

function adicionarNumero() {
    //referencia ao elemento da página 
    var inNum = document.getElementById('inNum')
    var outNum = document.getElementById('outNum')
    var outResposta = document.getElementById('outResposta')

    //obetem o elemento
    var num = Number(inNum.value)

    //verifica o preenchimento do numero
    if (num == 0 || isNaN(num) || numeros.indexOf(num) >= 0) {
        alert('Informe um número válido e inexistente na lista!!')
        inNum.focus()
        return
    }

    numeros.push(num)       //adiciona o numero no final do vetor

    //altera conteudo da tag outNum
    outNum.textContent = 'Números: ' + numeros.join(', ')

    //limpa a mensagem (se já clicou no conteudo...)
    outResposta.textContent = ''

    //limpa o campo e posicionar o cursor no inNum
    inNum.value = ''
    inNum.focus()
}
//referencia o elemento botão e adiciona evento click a função
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarNumero)

function verificarOrdem() {
    if (numeros.length == 0) {
        alert('Não há números na lista!!!')
        inNum.focus()
        return
    }

    var outResposta = document.getElementById('outResposta')

    //flag indicativa
    var resposta = true

    //prercorre os elementos do vetor (até o penultimo) 
    for (var i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] > numeros[i + 1]) {
            resposta = false
            break
        }
    }

    outResposta.textContent = resposta ? 'Ok! Números estão em ordem crescente!' : 'Atenção... Números não estão em ordem crescente'
}
//referencia ao elemento botão e adiciona evento click a função
var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarOrdem)