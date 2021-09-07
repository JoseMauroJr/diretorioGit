function exibirNomes() {
    //cria referencia ao elemento da pag. e obtem conteudo do campo, e divide o elemento
    var inNome = document.getElementById('inNome')
    var nome = inNome.value
    var partes = nome.split(' ')

    //valida o preenchimento
    if (nome == '' || partes.length == 1) {
        alert('Informe o nome completo!!')
        return
    }
    //cria referencia ao elemento divNome
    var divNome = document.getElementById('divNome')

    //para retirar os h3 ja existente (se clicou uma segunda vez no botão)
    var listaH3 = document.getElementsByTagName('h3')
    for (var i = listaH3.length - 1; i >= 0; i--) {
        divNome.removeChild(listaH3[i])
    }

    //cria um array de cores e uma variavel que vai recever sorteada as cores
    var cores = ["blue", "red", "yellow", "green", "orange", "chocolate", "deeppink", "purple", "violet", "aquamarine"]
    var corSorteada

    //cria laco for que vai percorrer as partes do nome, adicionar no h3 e sortear as cores
    for (var i = 0; i < partes.length; i++) {
        var h3 = document.createElement('h3')
        var texto = document.createTextNode(partes[i])
        h3.appendChild(texto)
        corSorteada = Math.floor(Math.random() * 10)
        h3.style.color = cores[corSorteada]
        divNome.appendChild(h3)

    }
}
//cria referencia ao botão e associa evento click a function
var btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', exibirNomes)