function contarVisitas() {
    //cria referência ao elemento da página outContador
    var outContador = document.getElementById('outContador')

    var contador = 0                    //contador inicia com 0

    //verifica se localStorage está "vazio"
    if (localStorage.getItem('lojaContador')) {
        contador = Number(localStorage.getItem('lojaContador'))
    }

    contador++                          //encrementa contador

    //verifica se é primeira visita a página
    if (contador == 1) {
        outContador.textContent = 'Muito Bem-Vindo!! Esta é sua primeira visita ao nosso site!'

    } else {
        outContador.textContent = 'Que bom que você voltou! Esta é a sua visita de número ' + contador + ' ao nosso site.'

    }

    localStorage.setItem('lojaContador', contador)      //salva no metodo setItem
}

contarVisitas()                         //chama a função

/* É nescesário manter as demais funções da página para o correto funcionamento das
 trocas de clube, bem como, página com cores e símbolo do clube salvo em localStorage*/

//capitura as tags input da página
var inputsRadio = document.getElementsByTagName('input')

//percorre os elementos para associar function ao evento change
for (var i = 0; i < inputsRadio.length; i++) {
    inputsRadio[i].addEventListener('change', trocarClube)
}

function trocarClube() {
    //cria referência aos elementos da página
    var imgClube = document.getElementById('imgClube')
    var divTitulo = document.getElementById('divTitulo')

    //armazena em um vetor a lista de clube
    var clubes = ['Brasil', 'Pelotas', 'Farroupilha']

    //percorre os radiobuttons para verificar qual está selecionado
    for (var i = 0; i < 4; i++) {
        //se selecionado armazena o índice do radio selecionado e sai da repetição 
        if (inputsRadio[i].checked) {
            var selecao = i
            break
        }
    }

    //se selecao <= 2 entrão troce por algum clube
    if (selecao <= 2) {
        //modifica cores(divTitulo)
        divTitulo.className = 'row cores' + clubes[selecao]

        //muda a propriedade src com a imagem do clube selecionado
        imgClube.src = 'img/' + clubes[selecao].toLowerCase() + '.png'
        //exibe imagem
        imgClube.className = 'exibe'
        //texto alternativo
        imgClube.alt = 'Símbolo do ' + clubes[selecao]
        //salva nome do clube
        localStorage.setItem('clube', clubes[selecao])

    } else {
        //se selecionou "Nenhum", tira classe de cor de divTitulo
        divTitulo.className = 'row'
        //oculta imagem
        imgClube.className = 'oculta'
        //limpa texto alternativo
        imgClube.alt = ''
        //remove item do localStorage
        localStorage.removeItem('clube')
    }
}

function verificarClube() {
    //se já estiver salvo algum clube
    if (localStorage.getItem('clube')) {

        var clube = localStorage.getItem('clube')       //obtém nome do clube

        //conforme o clube, marca um dos elementos input type radio
        if (clube == 'Brasil') {
            inputsRadio[0].checked = true

        } else if (clube == 'Pelotas') {
            inputsRadio[1].checked = true

        } else {
            inputsRadio[2].checked = true
        }

        trocarClube()       //chama função para trocar imagem e cores 
    }
}
//chama função que verifica se cliente já selecionou clube anteriomente
verificarClube()