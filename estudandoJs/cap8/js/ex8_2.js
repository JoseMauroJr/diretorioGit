//captura as tags input da página
var inputRadio = document.getElementsByTagName('input')
//percorre os elementos para associar function ao evento change
for (var i = 0; i < inputRadio.length; i++) {
    inputRadio[i].addEventListener('change', trocarClube)
}

function trocarClube() {
    //cria referência aos elementos da página
    var imgClube = document.getElementById('imgClube')
    var divTitulo = document.getElementById('divTitulo')

    //armazena em um vetor a lista de clube
    var clubes = ['Brasil', 'Pelotas', 'Farroupilha']

    //percorre os radiobuttons para verificar qual está selecionado
    for (var i = 0; i < 4; i++) {
        //se selecionado armazena índice do radio selecionado e sai da repetição
        if (inputRadio[i].checked) {
            var selecao = i
            break
        }
    }
    //se selecao <= 2, então torce por algum clube
    if (selecao <= 2) {
        divTitulo.className = 'row cores' + clubes[selecao]      //modifica cores(divTitulo)

        //muda a proriedade src com a imagem do clube selecionado
        imgClube.src = 'img/' + clubes[selecao].toLowerCase() + '.png'
        imgClube.className = 'exibe'                         //exibe imagem
        imgClube.alt = 'Símbolo do ' + clubes[selecao]      //texto alternativo
        localStorage.setItem('clubes', clubes[selecao])    //salva nome do clube
    } else {                                              //else (selecionou 'Nenhum')
        divTitulo.className = 'row'                      //tira a classe de cores da divTitulo
        imgClube.className = 'oculta'                   //oculta imagem
        imgClube.alt = ''                              //limpa texto alternatino
        localStorage.removeItem('clubes')             //remove variável do localStorage
    }
}

function verificarClube() {
    //se já estiver salvo algum clube
    if (localStorage.getItem('clubes')) {
        //obtém o nome do clube
        var clube = localStorage.getItem('clubes')

        //conforme o clube, marca um dos elementos do input type radio
        if (clube == 'Brasil') {
            inputRadio[0].checked = true
        } else if (clube == 'Pelotas') {
            inputRadio[1].checked = true
        } else {
            inputRadio[2].checked = true
        }

        trocarClube()                       //chama a função que troca a imagem e cores
    }
}
//chama a função que verifica se cliente já selecionou clube anteriormente
verificarClube()