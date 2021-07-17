function verificarParOuImpar() {
    //cria uma referência aos elementos da página
    let inNum = document.getElementById('inNum');
    var outResposta = document.getElementById('outResposta');

    //converte conteúdo do campo inNum
    let num = Number(inNum.value);

    //se preencheu ou NaN
    if (num == 0 || isNaN(num)) {
        alert('Informe um número corretamente');
        inNum.focus();
        return;
    }

    //verifica se resto da divisão do número por 2 for igual 0
    if (num % 2 == 0) {
        outResposta.textContent = 'Resposta: ' + num + ' é Par';
    } else {
        outResposta.textContent = 'Resposta: ' + num + ' é Ímpar';
    }
}
//cria uma referência do elemento botão e associa um evento com click
let btVerificar = document.getElementById('btVerificar');
btVerificar.addEventListener('click', verificarParOuImpar);