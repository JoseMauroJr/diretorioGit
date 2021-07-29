function criptografarMensagem() {
    //cria referência ao elemento da página e obtém  o conteudo do campo de entrada
    var inMensagem = document.getElementById('inMensagem')
    var mensagem = inMensagem.value

    //valida o preenchimento do campo
    if (mensagem == '') {
        alert('Informe uma mensagem válida!!')
        inMensagem.focus()
        return
    }

    //cria uma string vazia para concatenar, e vareavel com tamanho da string
    var resposta = ''
    var tam = mensagem.length

    //cria laço para pegar as letras das posições pares(na programação, ímpares)
    for (var i = 1; i < tam; i = i + 2) {
        resposta += mensagem.charAt(i)
    }

    //cria laço para pegar as letras das posições ímpares(na programação, pares)
    for (var i = 0; i < tam; i = i + 2) {
        resposta += mensagem.charAt(i)
    }

    //altera tag outResposta 
    document.getElementById('outResposta').textContent = resposta
}
//cria referência ao elemento botão e associa ao evento click a function
var btCripto = document.getElementById('btCripto')
btCripto.addEventListener('click', criptografarMensagem)

function descriptografarMensagem() {
    //cria referência ao elemento da página e obtém conteudo de entrada
    var inMensagem = document.getElementById('inMensagem')
    var mensagem = inMensagem.value

    //verifica se foi preenchido o conteudo
    if (mensagem == '') {
        alert('Informe uma mensagem válida!!')
        inMensagem.focus()
        return
    }

    /*cria variável que contem tamanho da string, uma variável 
    metade do tamnho e outra para concatenar*/
    var tam = mensagem.length
    var metade = Math.floor(tam / 2)
    var resposta = ''

    //cria uma condição com laço para poder descriptografar
    if (tam % 2 == 0) {
        for (var i = metade; i < tam; i++) {
            resposta += mensagem.charAt(i)
            resposta += mensagem.charAt(i - metade)
        }
    } else {
        for (var i = metade; i < tam - 1; i++) {
            resposta += mensagem.charAt(i)
            resposta += mensagem.charAt(i - metade)
        }
        resposta += mensagem.charAt(i)
    }
    //altera tag outResposta
    document.getElementById('outResposta').textContent = resposta
}
//cria referência ao botão e associa ao um evento click a function
var btDescripto = document.getElementById('btDescripto')
btDescripto.addEventListener('click', descriptografarMensagem)