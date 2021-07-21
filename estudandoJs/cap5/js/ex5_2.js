//declara array de escopo global que irá conter os números já apostados
var erros = []

//gera um número aleatório entre 1 e 100
var sorteado = Math.floor(Math.random() * 100) + 1

//declara constante com o número de chances
const CHANCES = 6

function apostarNumero() {
    //cria referência ao campo de entrada e obtém seu conteúdo
    var inNum = document.getElementById('inNum')
    var num = Number(inNum.value)

    //valida o número
    if (num <= 0 || num > 100 || isNaN(num)) {
        alert('Informe um número válido...')
        inNum.focus()
        return
    }

    //referência espaços das saídas de dados
    var outDica = document.getElementById('outDica')
    var outErros = document.getElementById('outErros')
    var outChances = document.getElementById('outChances')

    //se aposta do jogador for igual ai número sorteado
    if (num == sorteado) {
        alert('Parabéns!! Você Acertou!!')
        //troca status dos botões
        btApostar.disabled = true
        btJogar.className = 'exibe'
        outDica.textContent = 'Parabéns!! Número sorteado: ' + sorteado
    } else {
        //se número exibe no array erros
        if (erros.indexOf(num) >= 0) {
            alert('Você já apostou o número ' + num + '. Tente outro...')
        } else {
            erros.push(num)     //adociona número ao array
            var numErros = erros.length     //obtém tamanho do array
            var numChances = CHANCES - numErros     //calcula nº de chances
            //exibe nº de erros, conteúdo do array e nº de chances
            outErros.textContent = numErros + '(' + erros.join(', ') + ')'
            outChances.textContent = numChances
            if (numChances == 0) {
                alert('Suas chances acabaram...')
                btApostar.disabled = true
                btJogar.className = 'exibe'
                outDica.textContent = 'Game Over!! Número Sorteado: ' + sorteado
            } else {
                //usa operador ternário (condicional) para mensagem da dica
                var dica = num < sorteado ? 'Maior' : 'Menor'
                outDica.textContent = 'Dica: Tente um número ' + dica + ' que ' + num
            }
        }
    }
    //limpa campo de entrada e posiciona cursor neste campo
    inNum.value = ''
    inNum.focus()
}
var btApostar = document.getElementById('btApostar')
btApostar.addEventListener('click', apostarNumero)

function jogarNovamente() {
    location.reload()       //recarrega a página
}
var btJogar = document.getElementById('btJogar')
btJogar.addEventListener('click', jogarNovamente)