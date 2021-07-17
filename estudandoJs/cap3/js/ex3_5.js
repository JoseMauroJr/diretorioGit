/*Programa lê um número e informa sua raiz quadrada perfeita
caso o número não tenha uma raiz perfeita ele apenas mostra mensegem que não é uma
raiz perfeita */

function calcularRaiz() {
    //cria referência aos elementos da página
    let inNumero = document.getElementById('inNumero')
    let outResposta = document.getElementById('outResposta')

    let numero = Number(inNumero.value)       //obtém conteúdo do campo inNumero

    //se não preencheu ou NaN
    if (numero == 0 || isNaN(numero)) {
        alert('Informe um número válido...')    //exibe alerta
        inNumero.focus()                       //posiciona no campo inNumero
        return
    }

    let raiz = Math.sqrt(numero)            //calcula a raiz quadrada do número

    //se valor da variável raiz igual a este valor arredondado para baixo
    if (raiz == Math.floor(raiz)) {
        outResposta.textContent = 'Raiz: ' + raiz   //mostra raiz
    } else {
        //senão, exibe mensagem indicando que não há raiz exata
        outResposta.textContent = 'Não há raiz exata para ' + numero
    }
}
//cria referência ao elemento btExibir e registra evento que irá carregar function
let btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', calcularRaiz)