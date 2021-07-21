var noticias = []       //adicionando um vetor global

function adicionarNoticia() {
    //referencia aos elementos da página
    var inNoticia = document.getElementById('inNoticia')
    var outNum = document.getElementById('outNum')

    //obetem conteudo do elemento
    var noticia = inNoticia.value

    //verifica preenchimento dos campos da página
    if (noticia == '') {
        alert('Informe uma notícia a ser incluída')
        inNoticia.focus()
        return
    }

    noticias.push(noticia)      //adicionar dados ao vetor no final

    outNum.textContent = noticias.length    //mudando a tag outNum

    //limpando campo e posicionando o cursor
    inNoticia.value = ''
    inNoticia.focus()

}
//referencia ao elemento botão e adiciona evento click a função
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarNoticia)

function listarUltimas() {
    //chama o prompt para saber quantas notícias deseja listar
    var quant = Number(prompt('Quantas notícias você deseja listar??'))

    //cria total de notícia que é o tamanho do vetor
    var total = noticias.length

    var ultimas = quant + ' Últimas Notícias\n--------------------------------------------\n'

    //cria uma laço que vai enumerar as ultimas noticias e informar para usuario
    for (var i = total - 1; i >= total - quant; i--) {
        ultimas += (i + 1) + 'º) ' + noticias[i] + '\n'
    }

    //mudando tag outLista para informar as ultimas noticias
    document.getElementById('outLista').textContent = ultimas

}
//referencia ao elemento botão e adiciona evento click a função
var btListar = document.getElementById('btListar')
btListar.addEventListener('click', listarUltimas)