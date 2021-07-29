function gerarCitacao() {
    //cria referência aos elementos da página
    var inNome = document.getElementById('inNome')
    var outResposta = document.getElementById('outResposta')

    //obtém conteudo do campo de entrada
    var autor = inNome.value

    //valida o preenchimento do campo
    if (autor == '' || autor.indexOf(' ') == -1) {
        alert('Informe o nome completo do autor!')
        inNome.focus()
        return
    }

    //cria uma variável tamanho da string e uma partes da string
    var partes = autor.toUpperCase().split(' ')
    var tam = partes.length

    var citacao = partes[tam - 1] + ', '

    //cria uma laço que vai pegar as letras da string através do indice
    for (var i = 0; i < tam - 1; i++) {
        citacao += partes[i].charAt(0) + '. '
    }
    //altera tag outResposta
    outResposta.textContent = 'Citação Bibliografica: ' + citacao
}
//cria referência ao elemento botão e associa evento click a function
var btGerar = document.getElementById('btGerar')
btGerar.addEventListener('click', gerarCitacao)