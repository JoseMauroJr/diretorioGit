function calcularVacina() {
    //cria referência dos elementos da página
    var inValor = document.getElementById('inValor')
    var selConvenio = document.getElementById('selConvenio')
    var outDesc = document.getElementById('outDesc')
    var outPagar = document.getElementById('outPagar')

    //obtém o conteúdo de entrada da página
    var valor = Number(inValor.value)

    //verifica o preenchimento do campo 
    if (valor == 0 || isNaN(valor)) {
        alert('Informe um valor corretamente!!')
        inValor.focus()
        return
    }

    var desconto                //cria varivel desconto

    //cria condição que verifica o convênio
    if (rbSim.checked) {
        if (selConvenio.value == 'amigo') {
            desconto = calcularDesconto(valor, 20)
        } else {
            desconto = calcularDesconto(valor, 50)
        }
    } else {
        desconto = calcularDesconto(valor, 10)
    }
    //altera tag outDesc e outPagar
    outDesc.textContent = 'Desconto R$: ' + desconto.toFixed(2)
    outPagar.textContent = 'A Pagar R$: ' + (valor - desconto).toFixed(2)
}
//cria referência do botão e associa evento click a função
var btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularVacina)

function calcularDesconto(valor, taxa) {
    return valor * (taxa / 100)
}

//cria referência ao elemento radio e associa ao evento change que chama uma function anônima
var rbSim = document.getElementById('rbSim')
rbSim.addEventListener('change', function () {              //exibe o parágrafo em uma linha (display: block)
    //cria referência ao elemento pConvenio
    var pConvenio = document.getElementById('pConvenio')
    pConvenio.className = 'exibe'
})

var rbNao = document.getElementById('rbNao')
rbNao.addEventListener('change', function () {
    var pConvenio = document.getElementById('pConvenio')
    pConvenio.className = 'oculta'
})