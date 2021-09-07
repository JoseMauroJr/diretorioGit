function adicionarClube() {
    //cria referencia do elemento da pag. e obtem elemento do campo
    var inClube = document.getElementById('inClube')
    var clube = inClube.value

    //verifica o preenchimento do campo
    if (clube == '') {
        alert('Informe o nome do clube')
        return
    }
    //cria referencia ao elemento divJogos, cria novo elemento h5 e adicione estilo
    var divJogos = document.getElementById('divJogos')
    var novoH5 = document.createElement('h5')
    novoH5.className = "aDireita"               //pode indicar o estilo do elemento(arquivo css)
    novoH5.style.fontStyle = 'italic'          //ou aplicar um estilo a partir da propriedade .style

    //cria elemento texto que deve aparecer na pag.
    var texto = document.createTextNode(clube)

    //adiciona texto ao elemento h5 e elemento h5 a divJogos
    novoH5.appendChild(texto)
    divJogos.appendChild(novoH5)

    //limpa o campo de inClube
    inClube.value = ''
    inClube.focus()
}
//cria referencia ao botão e associa evento click a function adicionarClube
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener("click", adicionarClube)

function montarTabela() {
    //cria referencia ao elemento divJogos e elemento h5 filha de divJogos
    var divJogos = document.getElementById('divJogos')
    var h5 = divJogos.getElementsByTagName('h5')

    //verifica se o numero de clube e par
    if (h5.length == 0 || h5.length % 2 == 1) {
        alert('o numero de clube inserido deve ser par!!')
        return
    }
    //cria novo elemento h3 e um texto para elemento
    var novoH3 = document.createElement('h3')
    var texto = document.createTextNode('Tabela de Jogos')
    novoH3.appendChild(texto)
    divJogos.appendChild(novoH3)

    //cria novo elemento tabela
    var novaTable = document.createElement('table')
    novaTable.className = "table table-striped"
    divJogos.appendChild(novaTable)

    //cria laco for que vai percorrer numero de clube e adicionar as linhas e colunas da tabela
    for (var i = 0; i < h5.length; i++) {
        if (i % 2 == 0) {
            var linha = novaTable.insertRow(-1)
            var col1 = linha.insertCell(0)
            col1.textContent = h5[i].textContent
        } else {
            var col2 = linha.insertCell(1)
            col2.textContent = h5[i].textContent
        }
    }
    //apois a tabela montada desabilitar botões btAdicionar e btMontar
    btAdicionar.disabled = true
    btMontar.disabled = true
    btNovos.focus()
}
//cria referencia ao elemento botão e associa evento click a function montarTabela
var btMontar = document.getElementById('btMontar')
btMontar.addEventListener('click', montarTabela)

//cria referencia ao elemento botão e associa evento click a function
var btNovos = document.getElementById('btNovos')
btNovos.addEventListener('click', function () {
    location.reload()
})