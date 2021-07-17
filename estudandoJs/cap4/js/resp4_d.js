function criarEstrelas() {
    //cria referência dos elementos da página
    var inNum = document.getElementById('inNum')
    var outResposta = document.getElementById('outResposta')

    //obtém conteúdo do campo inNum
    var num = Number(inNum.value)

    if (num == 0 || isNaN(num)) {
        alert('Número Inválido...')
        inNum.focus()
        return
    }

    //declara variável que irá concatenar
    var estrela = ''

    //cria um laço de repetição de 1 até o número informado
    for (var i = 1; i <= num; i++) {
        //dentro da repetição criar outro laço(para cada linha, até i)
        for (var j = 1; j <= i; j++) {
            estrela = estrela + '*'
        }
        estrela = estrela + '\n'    //fazer uma quebra de linha
    }

    //exibe as estrelas
    outResposta.textContent = estrela
}
//cria referência do elemento botão e criar evento click
var btCriar = document.getElementById('btCriar')
btCriar.addEventListener('click', criarEstrelas)