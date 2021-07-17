function verificarTriangulo() {
    //cria referência aos elementos da página
    let inLadoA = document.getElementById('inLadoA')
    let inLadoB = document.getElementById('inLadoB')
    let inLadoC = document.getElementById('inLadoC')
    var outResposta = document.getElementById('outResposta')
    var outTipo = document.getElementById('outTipo')

    //converter os campos da página
    let ladoA = Number(inLadoA.value)
    let ladoB = Number(inLadoB.value)
    let ladoC = Number(inLadoC.value)

    //valida os dados de entrada
    if (ladoA == 0 || isNaN(ladoA) || ladoB == 0 || isNaN(ladoB) || ladoC == 0 || isNaN(ladoC)) {
        alert('Informe lados válidos para um triângulo')
        inLadoA.focus()
        return
    }

    //cria as condições para exibir resposta
    if (ladoA > ladoB + ladoC || ladoB > ladoA + ladoC || ladoC > ladoA + ladoB) {
        outResposta.textContent = 'Lados não podem formar um Triângulo'
    } else {
        outResposta.textContent = 'Lados podem formar um Triângulo'
        if (ladoA == ladoB && ladoA == ladoC) {
            outTipo.textContent = 'Tipo: Equilátero'
        } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
            outTipo.textContent = 'Tipo: Isósceles'
        } else {
            outTipo.textContent = 'Tipo: Escaleno'
        }
    }
}
let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificarTriangulo)