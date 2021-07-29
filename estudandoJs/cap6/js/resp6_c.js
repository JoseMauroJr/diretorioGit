function verificarFrase() {
    //cria referência aos elementos da página 
    var inFrase = document.getElementById('inFrase')
    var outResposta = document.getElementById('outResposta')

    //obtém conteudo do campo de entrada e já converte para maiúscula
    var frase = inFrase.value.toUpperCase()

    //valida o preenchimento do campo de entrada
    if (frase == '' || frase.indexOf(' ') == -1) {
        alert('Informe uma frase!!')
        inFrase.focus()
        return
    }

    //retira os espaços branco da frase
    var frase2 = frase.replace(/ /g, '')
    var tam = frase2.length

    var iguais = true

    //cria uma laço que repete até a metade(compara as primeiras letras com as últimas)
    for (var i = 0; i < tam / 2; i++) {
        //verifica se a primeira letra é diferente da última(sucessivamente)
        if (frase2[i] != frase2[tam - 1 - i]) {
            iguais = false
            break
        }
    }

    //cria condição se iguais for verdadeiro
    if (iguais) {
        outResposta.textContent = frase + ' é um Palíndromo!'
    } else {
        outResposta.textContent = frase + ' não é um Palíndromo!'
    }
}
//cria referência ao botão e associa evento click a function
var btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarFrase)