/*Programa peso ideal calcula o peso ideal para uma pessoa usando uma formula
para homem e outra para mulheres a partir da leitura dos dados  */

function calcularPeso() {
    //cria referência aos elementos manipulados pela função
    let inNome = document.getElementById('inNome')
    let rbMasculino = document.getElementById('rbMasculino')
    let rbFeminino = document.getElementById('rbFeminino')
    let inAltura = document.getElementById('inAltura')
    let outResposta = document.getElementById('outResposta')

    //obtém o conteúdo dos campos de edição da página
    let nome = inNome.value
    let masculino = rbMasculino.checked
    let feminino = rbFeminino.checked
    let altura = Number(inAltura.value)

    //verifica se nome foi preenchido e sexo selecionado
    if (nome == '' || (masculino == false && feminino == false)) {
        alert('Por favor, informe o nome e selecione o sexo..')
        inNome.focus() //posiciona (joga o foco) no campo de edição inNome
        return
    }

    //se altura vazio (0) ou NaN(um texto é informado)
    if (altura == 0 || isNaN(altura)) {
        alert('Por favor, informe a altura corretamente...')
        inAltura.focus()
        return
    }

    //se masculino for verdadeiro
    if (masculino) {
        var peso = 22 * Math.pow(altura, 2) //Math.pow eleva os paramentros
    } else {
        var peso = 21 * Math.pow(altura, 2)
    }

    //apresenta a resposta (altera o conteúdo da linha outResposta)
    outResposta.textContent = nome + ': Seu peso ideal é ' + peso.toFixed(3) + ' kg'
}
//cria referência ao elemento btCalcular e registra evento associado a calcularPeso
let btResultado = document.getElementById('btCalcular')
btResultado.addEventListener('click', calcularPeso)

function limparCampos() {
    //limpar os conteúdos dos elementos
    document.getElementById('inNome').value = ''
    document.getElementById('rbMasculino').checked = false
    document.getElementById('rbFeminino').checked = false
    document.getElementById('inAltura').value = ''
    document.getElementById('outResposta').textContent = ''
    //posiciona no elemento inNome
    document.getElementById('inNome').focus()
}
let btLimpar = document.getElementById('btLimpar')
btLimpar.addEventListener('click', limparCampos)