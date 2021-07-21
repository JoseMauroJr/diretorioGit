var clubes = []     //declara vetor global

function adicionarClube() {
    //referencia dos elementos da página e obtém o conteudo
    var inClube = document.getElementById('inClube')
    var nome = inClube.value

    //verifica o preenchimento do nome do clube
    if (nome == '') {
        alert('Informe um nome do clube!!')
        return
    }

    clubes.push(nome)       //adiciona o nome no final do vetor

    listarClubes()         //chamar a função listarClubes

    //limpar o campo inClube
    inClube.value = ''
    inClube.focus()
}
//referencia ao elementdo Botão e adicionar evento click a função
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarClube)

function listarClubes() {
    //verifica se vetor está vazio
    if (clubes.length == 0) {
        alert('Não há clubes na lista!!')
        return
    }

    var lista = ''      //para concatenar lista de clubes

    //percorre o elementos do vetor
    for (var i = 0; i < clubes.length; i++) {
        lista += (i + 1) + '. ' + clubes[i] + '\n'
    }

    //alterar conteudo da tag outLista
    document.getElementById('outLista').textContent = lista
}
//referencia ao elemento botão e adicionar evento click a função
var btlistar = document.getElementById('btListar')
btListar.addEventListener('click', listarClubes)

function montarJogos() {
    var tam = clubes.length

    //verificar se vetor tá vazio ou se tamanho é impar
    if (tam == 0 || (tam % 2 == 1)) {
        alert('Deve haver o número par de clube')
        inClube.focus()
        return
    }

    //string para concatenar os jogos
    var jogos = ''

    var ultimo = tam - 1

    //percorre os elementos do vetor
    for (var i = 0; i < tam / 2; i++) {
        jogos += clubes[i] + ' x ' + clubes[ultimo - i] + '\n'
    }

    //altera conteudo da lista
    document.getElementById('outLista').textContent = jogos
}
//referencia ao elemento botão e adicionar evento click a função
var btMontar = document.getElementById('btMontar')
btMontar.addEventListener('click', montarJogos)