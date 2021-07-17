function verificaVelocidade() {
    //cria referência do elementos da página
    let inVelPermitida = document.getElementById('inVelPermitida')
    let inVelCondutor = document.getElementById('inVelCondutor')
    var outSituacao = document.getElementById('outSituacao')

    //converter campo inVelPermitida e inVelCondutor
    let velPermitida = Number(inVelPermitida.value)
    let velCondutor = Number(inVelCondutor.value)

    //se não preencheu ou NaN
    if (inVelPermitida.value =='' || isNaN(velPermitida) ||
        inVelCondutor.value =='' || isNaN(velCondutor)) {
        alert('Informe um valor válido!!')
        inVelPermitida.focus()
        return
    }

    if (velCondutor <= velPermitida) {
        outSituacao.textContent = 'Situação: Sem Multa';
    
    } else {
        var maisVinte = velPermitida * 1.20;
    
     if (velCondutor <= maisVinte) {
        outSituacao.textContent = 'Situação: Multa Leve';
    
    } else {
        outSituacao.textContent = 'Situação: Multa Grave';
    }
}
}

//cria referência do elemento botão e associa um evento a function
let btVerificar = document.getElementById('btVerificar')
btVerificar.addEventListener('click', verificaVelocidade)