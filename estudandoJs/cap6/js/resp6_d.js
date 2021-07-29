function calcularDataLimite() {
    //cria referência aos elementos da página
    var inData = document.getElementById('inData')
    var inValor = document.getElementById('inValor')
    var outDataLimite = document.getElementById('outDataLimite')
    var outValorDesconto = document.getElementById('outValorDesconto')

    //obtém valor do campo de entrada
    var data = inData.value
    var valor = Number(inValor.value)

    //valida o preenchimento do campo
    if (data == '' || valor == 0 || isNaN(valor)) {
        alert('Informe uma data e valor da multa!!')
        inData.focus
        return
    }

    //declara variável do tipo DATE
    var dataLimite = new Date()

    //obtém as partes da data da multa
    var partes = data.split('-')

    //seta as partes da data
    dataLimite.setDate(Number(partes[2]))
    dataLimite.setMonth(Number(partes[1] - 1))
    dataLimite.setFullYear(Number(partes[0]))

    //obtém o dia da multa
    var dia = dataLimite.getDate()

    //aumenta 90 dias na data da multa
    dataLimite.setDate(dia + 90)

    //declara as variáveis que vão informar data
    var dia = dataLimite.getDate()
    var mes = dataLimite.getMonth() + 1
    var ano = dataLimite.getFullYear()

    //valor do desconto
    var desconto = valor * 0.80

    //informa a saida data e valor de desconto
    outDataLimite.textContent = 'Data Limite para Pagto com Desconto: ' + (dia < 10 ? '0' + dia : dia) + '/' + (mes < 10 ? '0' + mes : mes) + '/' + ano
    outValorDesconto.textContent = 'Valor com Desconto R$: ' + desconto.toFixed(2)
}
//cria referência ao elemento botão e associa evento click a function
var btCalcular = document.getElementById('btCalcular')
btCalcular.addEventListener('click', calcularDataLimite)