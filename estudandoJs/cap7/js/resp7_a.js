function categorizarAtleta() {
    //cria referência dos elementos da página
    var inAtleta = document.getElementById('inAtleta')
    var inIdade = document.getElementById('inIdade')
    var outResposta = document.getElementById('outResposta')

    //obtém os elementos dos campos de entrada
    var atleta = inAtleta.value
    var idade = Number(inIdade.value)

    //verificar o preenchimento dos campos
    if (atleta == '' || idade == 0 || isNaN(idade)) {
        alert('Informe os dados corretamente')
        inAtleta.focus()
        return
    }

    //chama as funções gerarTracos e verCategoria e associa as variáveis
    var sublinhado = gerarTracos(atleta)
    var categoria = verCategoria(idade)

    //munda a tag outResposta
    outResposta.textContent = atleta + '\n' + sublinhado + '\nCategoria: ' + categoria
}
//cria referência do botão e associa evento click a função
var btCategorizar = document.getElementById('btCategorizar')
btCategorizar.addEventListener('click', categorizarAtleta)

function gerarTracos(nome) {
    //cria variável que recebe o tamanho da string e uma string vazia para concatenar 
    var tam = nome.length
    var tracos = ''

    //cria um laço de repetição que verifica o tamnho da string e associa os traços
    for (var i = 0; i < tam; i++) {
        if (nome.charAt(i) != ' ') {
            tracos += '-'
        } else {
            tracos += ' '
        }
    }
    return tracos
}

function verCategoria(idade) {
    //cria uma variável categoria e uma condição que vai verificar a idade dos atletas
    var cat
    if (idade <= 12) {
        cat = 'Infantil'
    } else if (idade <= 18) {
        cat = 'Juvenil'
    } else {
        cat = 'Adulto'
    }

    return cat
}