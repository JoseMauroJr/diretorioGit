function gerarSenha() {
    //cria referência os elementos da página
    var inAluno = document.getElementById('inAluno')
    var outSenha = document.getElementById('outSenha')

    //obtém o elemento do campo de entrada
    var aluno = inAluno.value

    //verica o preenchimento dos campos e retorna função validarNome no if
    if (aluno == '' || !validarNome(aluno)) {
        alert('Informe o nome completo do aluno!!')
        inAluno.focus()
        return
    }

    //exibe resposta e rotorno da função é ultilizado na resposta
    outSenha.textContent = 'Senha Inicial: ' + obterSobrenome(aluno) + contarVogais(aluno)
}
//cria referência do botão e associa o evento click a função
var btGerar = document.getElementById('btGerar')
btGerar.addEventListener('click', gerarSenha)

function validarNome(nome) {
    //se houver espaço no nome retorna true
    if (nome.indexOf(' ') >= 1) {
        return true
    } else {
        return false
    }
}

function obterSobrenome(nome) {
    //retorna o último nome em letras minúsculas
    var ultimoEspaco = nome.lastIndexOf(' ')
    return nome.substr(ultimoEspaco + 1).toLowerCase()
}

function contarVogais(nome) {
    //vai receber nome e verifica e rotorna as vogais
    var num = 0
    var letra
    for (var i = 0; i < nome.length; i++) {
        letra = nome.charAt(i).toUpperCase()
        if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U') {
            num++
        }
    }
    return num < 10 ? '0' + num : num
}