/*Um programa que lê o valor de saque de um cliente e verifica sua validade
(se pode ser pago com as notas disponíveis) e informe o número mínimo de notas de 
100, 50 e 10. */

function calcularNotas() {
    //cria uma referência aos elementos da página
    var inSaque = document.getElementById('inSaque');
    var outNotasCem = document.getElementById('outNotasCem');
    var outNotasCinquenta = document.getElementById('outNotasCinquenta');
    var outNotasDez = document.getElementById('outNotasDez');

    //limpa mensagens(caso, segunda execução)
    outNotasCem.textContent = "";
    outNotasCinquenta.textContent = "";
    outNotasDez.textContent = "";

    var saque = Number(inSaque.value);       //converte conteúdo do campo inSaque

    //se não preencheu ou NaN
    if (saque == 0 || isNaN(saque)) {
        alert('Informe o valor do saque corretamente');  //exibe alerta
        inSaque.focus();                                 //posiciona em inSaque
        return;
    }

    //verifica se saque não é mútiplo de 10
    if (saque % 10 != 0) {
        alert('valor inválido para notas disponíveis (R$ 10, 50, 100)');
        inSaque.focus();
        return;
    }

    //calcula notas de 100, 50 e 10
    var notasCem = Math.floor(saque / 100);
    var resto = saque % 100;
    var notasCinquentas = Math.floor(resto / 50);
    resto = resto % 50;
    var notasDez = Math.floor(resto / 10);

    //exibe as notas apenas se houver
    if (notasCem > 0) {
        outNotasCem.textContent = 'Notas de R$ 100: ' + notasCem;
    }

    if (notasCinquentas > 0) {
        outNotasCinquenta.textContent = 'Notas de R$ 50: ' + notasCinquentas;
    }

    if (notasDez > 0) {
        outNotasDez.textContent = 'Notas de R$ 10: ' + notasDez;
    }
}
//cria referência ao elemento btExibir e associa function ao evento click
var btSaque = document.getElementById('btSaque');
btSaque.addEventListener('click', calcularNotas);