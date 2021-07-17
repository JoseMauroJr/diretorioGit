/*Programa lê as notas de aluno e mostra média e situação do aluno 
se ele vai tá aprovado ou reprovado*/

function calcularMedia() {
    //cria referência aos elementos da página

    let inNome = document.getElementById('inNome')
    let inNota1 = document.getElementById('inNota1')
    let inNota2 = document.getElementById('inNota2')
    let outSituacao = document.getElementById('outSituacao')
    let outMedia = document.getElementById('outMedia')

    //obtém os conteúdos dos campos da página
    let nome = inNome.value
    let nota1 = Number(inNota1.value)
    let nota2 = Number(inNota2.value)

    //calcula a média das notas
    let media = (nota1 + nota2) / 2

    //apresenta a média (altera o conteúdo do elemento outMedia)
    outMedia.textContent = 'Média das Notas: ' + media.toFixed(1)

    //cria condição
    if (media >= 7) {
        //altera o texto da cor do elemento outSituacao
        outSituacao.textContent = 'Parabéns ' + nome + '! Você foi Aprovado(a)'
        outSituacao.style.color = 'blue'
        
    } else if (media >= 4) {
        outSituacao.textContent = 'Atenção ' + nome + '! Você está em Recuperação'
        outSituacao.style.color = 'green'

    } else {
        outSituacao.textContent = 'Ops ' + nome + '... Você foi Reprovado(a)'
        outSituacao.style.color = 'red'
    }
}
/*cria referência ao elemento btResultado (botão) e 
registra um evento associado ao botão, para carregar a função*/
let btResultado = document.getElementById('btResultado')
btResultado.addEventListener('click', calcularMedia)