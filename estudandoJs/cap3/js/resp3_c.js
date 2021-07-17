function verificarEstacionamento() {
    //cria referência da página
    let inValor = document.getElementById('inValor')
    var outTempo = document.getElementById('outTempo')
    var outTroco = document.getElementById('outTroco')

    //converter o campo de inValor
    let valor = Number(inValor.value)

    //se não preencheu ou NaN
    if (inValor.value == 0 || isNaN(valor)) {
        alert('Informe um valor valido!!')
        inValor.focus()
        return
    }

    //caso valor insuficiente 
    if (valor < 1.00) {
        alert('Valor insuficiente! (valor mínimo de R$: 1.00)')
        inValor.focus()
        return
    }

    //declara variável de tempo e troco
    var tempo
    var troco

    //cria as condições para verificar tempo e troco
    if (valor >= 3.00) {
        tempo = 120
        troco = valor - 3.00

    } else if (valor >= 1.75) {
        tempo = 60
        troco = valor - 1.75
    } else {
        tempo = 30
        troco = valor - 1.00
    }

    outTempo.textContent = 'Tempo: ' + tempo + ' min'
    outTroco.textContent = 'Troco R$: ' + troco.toFixed(2)
}
let btConfirmar = document.getElementById('btConfirmar')
btConfirmar.addEventListener('click', verificarEstacionamento)