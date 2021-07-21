var candidatos = []     //declara um vetor global

function adicionarCandidato() {
    //referencia aos elementos da página
    var inNome = document.getElementById('inNome')
    var inNum = document.getElementById('inNum')

    //obtem o conteudo dos elementos
    var nome = inNome.value
    var acertos = Number(inNum.value)

    //verifica o preenchimento dos campos
    if (nome == '' || inNum.value == '' || isNaN(acertos)) {
        alert('Informe corretamente os dados!!!')
        inNome.focus()
        return
    }

    candidatos.push({ nome: nome, acertos: acertos })  //adicionar dados ao vetor de objetos

    //limpa campo e posiciona o cursor no inNome
    inNome.value = ''
    inNum.value = ''
    inNome.focus()

    listarCandidatos()      //chama função que lista os candidatos
}
//referencia ao elemento botão e adiciona evento click a função
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarCandidato)

function listarCandidatos() {
    //verifica se vetor está vazio
    if (candidatos.length == 0) {
        alert('Não há candidatos na lista..')
        return
    }

    var lista = ''      //para concatenar a lista de candidatos

    //percorre os elementos do vetor
    for (var i = 0; i < candidatos.length; i++) {
        lista += candidatos[i].nome + ' - ' + candidatos[i].acertos + ' acertos\n'
    }

    //altera o conteudo da tag outLista
    document.getElementById('outLista').textContent = lista
}
//referencia ao elemento botão e adiciona evento click a função
var btListar = document.getElementById('btListar')
btListar.addEventListener('click', listarCandidatos)

function candidatosAprovados() {
    //verifica se vetor ta vazio
    if (candidatos.length == 0) {
        alert('Não há candidatos na lista...')
        return
    }

    var corte = Number(prompt('Número de acerto para aprovação??'))
    //verifica se ta número de acerto é valido
    if (corte == 0 || isNaN(corte)) {
        alert('Número inválido!!')
        return
    }

    //cria uma copia vetor candidato
    var copia = candidatos.slice()

    //ordena o vetor copia pelos acertos
    copia.sort(function (a, b) { return a.acertos - b.acertos })

    //inverte ordem dos elementos (para ficar decrescente)
    copia.reverse()

    var aprovados = ''      //para concatenar aprovados

    //percorre os elementos do vetor
    for (var i = 0; i < copia.length; i++) {
        if (copia[i].acertos >= corte) {
            aprovados += copia[i].nome + ' - ' + copia[i].acertos + ' acertos\n'
        }
    }

    //cria uma referencia ao elemento outLista
    var outLista = document.getElementById('outLista')

    if (aprovados == '') {
        outLista.textContent = 'Não há candidatos aprovados!!!'
    } else {
        outLista.textContent = aprovados
    }

}
//referencia ao elemento botão e adiciona evento click a função
var btAprovados = document.getElementById('btAprovados')
btAprovados.addEventListener('click', candidatosAprovados)