function montarDica() {
    //cria referência aos elementos da página
    var inFruta = document.getElementById('inFruta')
    var outDica = document.getElementById('outDica')

    //obtém conteúdo do campo de entrada
    var fruta = inFruta.value.toUpperCase()

    //se vazio, exibe alerta, posiciona em inFruta e retorna
    if (fruta == '') {
        alert('Informe a fruta...')
        inFruta.focus()
        return
    }

    var resposta = fruta.charAt(0)      //letra inicial da fruta
    var estrela = '*'                  //vai concatenar *
    var tam = fruta.length            //obtém o tamanho da string fruta

    //percorre os demais caracteres da fruta
    for (var i = 1; i < tam; i++) {
        //se a letra da posição da variável de controle for igual à primeira...
        if (fruta.charAt(i) == fruta.charAt(0)) {
            resposta += fruta.charAt(0)     //adiciona a letra inicial
        } else {                            //senão
            resposta += '_'                 //adiciona sublinhado
        }
        estrela += '*'                      //concatena *
    }

    //exibe a resposta e exibe estrelas (*) em inFruta
    outDica.textContent = resposta
    inFruta.value = estrela
}
//cria referência ao elemento botão adiciona evento click a função
var btMontar = document.getElementById('btMontar')
btMontar.addEventListener('click', montarDica)