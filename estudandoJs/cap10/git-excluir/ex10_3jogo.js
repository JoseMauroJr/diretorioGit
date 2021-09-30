//seclara variáveis globais
var palavraSorteada
var dicaSorteada

//cria referência aos elementos que irão conter eventos associados a functions
var inLetra = document.getElementById('inLetra')
var btJogar = document.getElementById('btJogar')
var btVerDica = document.getElementById('btVerDica')

function montarJogo() {
    //cria referência ao local onde a palavra sortrada (letra inicial e_) é exibida
    var outPalavra = document.getElementById('outPalavra')

    //obtém conteúdo do localStorage e separa em elementos de vetor
    var palavras = localStorage.getItem("jogoPalavra").split(';')
    var dicas = localStorage.getItem("jogoDica").split(';')

    //número de palavras cadastradas
    var tam = palavras.length
    //gera um número entre 0 e tam-1 (pois arredonda para baixo)
    var numAleatorio = Math.floor(Math.random() * tam)

    //obtém palavra(em letras maiúsculas) e dica na posição do número  aleatório gerado
    palavraSorteada = palavras[numAleatorio].toUpperCase()
    dicaSorteada = dicas[numAleatorio]
    var novaPalavra = ''        //para montar palavra exibida(com letra inicial e "_")

    //for para exibir a letra inicial e as demais ocorrências desta letra na palavra
    for (var i = 0; i < palavraSorteada.length; i++) {
        //se igual a letra inicial, acrescenta esta letra na exibição
        if (palavraSorteada.charAt(0) == palavraSorteada.charAt(i)) {
            novaPalavra += palavraSorteada.charAt(0)
        } else {
            //senão acrescenta "_"
            novaPalavra += '_'
        }
    }
    //exibe a novaPalavra
    outPalavra.textContent = novaPalavra
}
//se houver palavras cadastradas
if (localStorage.getItem("jogoPalavra")) {
    //se sorteia e "monta" palavra do jogo
    montarJogo()
} else {
    /*senão, exibe alerta desabilita inLetra e botões
    (por isso, eles são referenciados no início do programa)*/
    alert('Cadastre palavras para jogar')
    inLetra.disabled = true
    btJogar.disabled = true
    btVerDica.disabled = true

}

function mostrarDica() {
    //cria referência aos elementos da página a serem alterados nesta function
    var outErros = document.getElementById('outErros')
    var outDica = document.getElementById('outDica')
    var outChances = document.getElementById('outChances')

    //obtém o conteúdo do elemento outErros
    var erros = outErros.textContent

    //verifica se o jogador já clicou anteriormente no botão
    if (erros.indexOf('*') >= 0) {
        alert('Você já solicitou a dica...')
        inLetra.focus()
        return
    }

    //exibe a dica, acrescenta "*" nos erros, diminui 1 em chances e mostra o nº de chances
    outDica.textContent = ' * ' + dicaSorteada
    outErros.textContent = erros + '*'
    var chances = Number(outChances.textContent) - 1
    outChances.textContent = chances

    trocarStatus(chances)       //chama a função que troca imagem

    verificarFim()              //chama a função que verifica se atingiu limite de chances

    inLetra.focus()             //joga foco em inLetra(já referenciado no início do prog.)
}
//associa ocorrência do evento click deste elemento a function mostrarDica
btVerDica.addEventListener('click', mostrarDica)

function trocarStatus(num) {
    if (num > 0) {
        var imgStatus = document.getElementById('imgStatus')
        imgStatus.src = "img/status" + num + ".jpg"
    }
}

function jogarLetra() {
    //cria referência aos elementos da página
    var outPalavra = document.getElementById('outPalavra')
    var outErros = document.getElementById('outErros')
    var outChances = document.getElementById('outChances')

    //obtém o conteúdo do campo inLetra e converte-o para maiúscula
    var letra = inLetra.ariaValueMax.toUpperCase()

    //valida o preenchimento de uma única letra
    if (letra == '' || letra.length != 1) {
        alert('Informe uma letra!!')
        inLetra.focus()
        return
    }

    //obtém o conteúdo dos elementos da página
    var erros = outErros.textContent
    var palavra = outPalavra.textContent

    //se a letra apostada já consta em erros, significa que ele já apostou esta letra
    if (erros.indexOf(letra) >= 0 || palavra.indexOf(letra) >= 0) {
        alert('Você já apostou esta letra!!')
        inLetra.focus()
        return
    }

    //se letra consta em palavraSorteada
    if (palavraSorteada.indexOf(letra) >= 0) {
        var novaPalavra = ''        //para compor nova palavra
        //for para montar palavra a ser exibida
        for (var i = 0; i < palavraSorteada.length; i++) {
            //se igual a letra apostada, acrescenta esta letra na exibição
            if (palavraSorteada.charAt(i) == letra) {
                novaPalavra += letra
            } else {                //senão
                novaPalavra += palavra.charAt(i)        //acrescenta a letra ou "_" existente
            }
        }
        outPalavra.textContent = novaPalavra            //exibe a novaPalavra

        //se letra não consta em palavraSorteada
    } else {
        erros += letra                  //acrescenta letra em erros
        outErros.textContent = erros    //exibe os erros
        var chances = Number(outChances.textContent) - 1    //diminui nº de chances
        outChances.textContent = chances        //exibe novo nº de chances

        trocarStatus(chances)               //troca imagem
    }
    verificarFim()      //verifica se já ganhou ou perdeu

    inLetra.value = ''
    inLetra.focus()
}
btJogar.addEventListener('click', jogarLetra)

//associa evento keypress a function anônima que verifica se pressionou enter(13)
inLetra.addEventListener('keypress', function (tecla) {
    if (tecla.keyCode == 13) {
        jogarLetra()        //chama jogarLetra
    }
})

function verificarFim() {
    //cria referência aos elementos da página
    var outChances = document.getElementById('outChances')
    var outMensagemFinal = document.getElementById('outMensagemFinal')

    //obtém número de chances
    var chances = Number(outChances.textContent)

    //se 0, perdeu
    if (chances == 0) {
        //display-3 é um estilo do bootstrap
        outMensagemFinal.className = "display-3 fonteVermelho"
        outMensagemFinal.textContent = 'Ah.... é ' + palavraSorteada + '. Você Perdeu!!'
        concluirJogo()
        //se não é 0 e a palavra exibida em outPalavra é igual a palavra sorteada, ganhou
    } else if (outPalavra.textContent == palavraSorteada) {
        outMensagemFinal.className = "display-3 fonteAzul"
        outMensagemFinal.textContent = 'Parabéns!! Você Ganhou!!'
        concluirJogo()
    }
}
//function concluirJogo, modifica o texto da dica e desabilita botões de jogar
function concluirJogo() {
    var outDica = document.getElementById('outDica')
    outDica.textContent = '* Clique no botão "Iniciar Jogo" para jogar novamente'
    inLetra.disabled = true
    btJogar.disabled = true
    btVerDica.disabled = true
}