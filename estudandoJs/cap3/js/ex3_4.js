/*Program lê hora do Brasil e infroma Hora na França */

function calcularFuso() {
    //cria uma referência aos elementos da página
    let inHoraBrasil = document.getElementById('inHoraBrasil')
    let outHoraFranca = document.getElementById('outHoraFranca')

    //obtém e converte o contéudo do campo inHoraBrasil
    let horaBrasil = Number(inHoraBrasil.value)

    //se não preencheu ou NaN
    if (inHoraBrasil.value == '' || isNaN(horaBrasil)) {
        alert('Informe a hora no Brasil corretamente') // exibe um alerta
        inHoraBrasil.focus()        //posiciona em inHoraBrasil
        return
    }

    let horaFranca = horaBrasil + 5     //calcula o horário na França

    //se passar 24 horas na França...
    if (horaFranca > 24) {
        horaFranca = horaFranca - 24        //...subtrai 24
    }

    //exibe resposta(Altera conteúdo do elemento outHoraFranca)
    outHoraFranca.textContent = 'Hora na França: ' + horaFranca.toFixed(2)
}
//cria referência ao elemento btExibir e registra evento associado a function
let btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', calcularFuso)