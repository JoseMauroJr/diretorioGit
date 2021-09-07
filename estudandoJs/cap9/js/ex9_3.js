function adicionarFilme() {
    //cria referência aos campos de entrada
    var inTitulo = document.getElementById('inTitulo')
    var inGenero = document.getElementById('inGenero')

    var titulo = inTitulo.value             //obtém conteúdo dos campos
    var genero = inGenero.value

    //valida preenchimento
    if (titulo == '' || genero == '') {
        alert('Informe corretamente os dados')
        inTitulo.focus()
        return
    }

    //cria referência ao elemento tbFilmes
    var tbFilmes = document.getElementById('tbFilmes')

    //chama function que irá inserir filme na tabela
    inserirLinha(tbFilmes, titulo, genero)

    //chama function que irá gravar dado em localStorage
    gravarFilme(titulo, genero)

    //limpa campos de entrada
    inTitulo.value = ''
    inGenero.value = ''
    inTitulo.focus
}
//cria referência ao botão e associa evento click a função
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarFilme)

function inserirLinha(tabela, titulo, genero) {
    //adiciona uma linha na tabela
    var linha = tabela.insertRow(-1)

    //cria colunas na linha inserida
    var col1 = linha.insertCell(0)
    var col2 = linha.insertCell(1)
    var col3 = linha.insertCell(2)

    //joga um conteúdo em cada célula
    col1.textContent = titulo
    col2.textContent = genero
    col3.innerHTML = "<input type='checkbox'>"      //innerHTML rederiza código
}

function gravarFilme(titulo, genero) {
    //se há filmes salvos em localStorage
    if (localStorage.getItem("filmesTitulo")) {
        //obtém os dados e acrescenta ";" e título/gênero informado
        var filmesTitulo = localStorage.getItem("filmesTitulo") + ';' + titulo
        var filmesGenero = localStorage.getItem("filmesGenero") + ';' + genero

        localStorage.setItem("filmesTitulo", filmesTitulo)      //grava dados em localStorage
        localStorage.setItem("filmesGenero", filmesGenero)
    } else {
        //senão, é primeira inclusão (salva sem delimitador)
        localStorage.setItem("filmesTitulo", titulo)
        localStorage.setItem("filmesGenero", genero)
    }
}

function recuperarFilmes() {
    //se houve dados salvos em localStorage
    if (localStorage.getItem("filmesTitulo")) {
        //obtém conteúdo e converte em elementos de vetor (na ocorrência ";")
        var titulos = localStorage.getItem("filmesTitulo").split(';')
        var generos = localStorage.getItem("filmesGenero").split(';')

        //cria referência ao elemento tbFilmes
        var tbFilmes = document.getElementById('tbFilmes')

        //percorre elementos do vetor e os insere na tabela
        for (var i = 0; i < titulos.length; i++) {
            inserirLinha(tbFilmes, titulos[i], generos[i])
        }
    }
}
recuperarFilmes()

//cria referência ao checkbox ckTodos(na linha de título da tabela)
var ckTodos = document.getElementById('ckTodos')
//excuta função anônima quando houver uma troca de status
ckTodos.addEventListener('change', function () {
    //cria referência à tabela e aos campos input(filhos da tabela)
    var tbFilmes = document.getElementById('tbFilmes')
    var ckExcluir = tbFilmes.getElementsByTagName('input')

    //obtém status de ckTodos e percorre os demas checkbox para aplicar este status
    var status = ckTodos.checked
    for (var i = 1; i < ckExcluir.length; i++) {
        ckExcluir[i].checked = status
    }
})

function removerFilmes() {
    //cria referência à tabela e aos campos input(filhos da tabela)
    var tbFilmes = document.getElementById('tbFilmes')
    var ckExcluir = tbFilmes.getElementsByTagName('input')

    var temSelecionado = false              //para verificar se há filmes selecionados

    //percorre campos input type checkbox da tabela(exceto "Todos" no título)
    for (var i = 1; i < ckExcluir.length; i++) {
        //se está selecionado muda valor da flag e sai da repetição
        if (ckExcluir[i].checked) {
            temSelecionado = true
            break
        }
    }
    //se não temSelecionado(se valor da variável é false)
    if (!temSelecionado) {
        alert('Não há filmes selecionados para exclusão!!')
        return
    }
    //solicita confirmação de exclusão dos filmes selecionados
    if (confirm('Confirma exclusão dos filmes selecionados??')) {
        //excluir conteúdo armazenado em localStorage
        localStorage.removeItem("filmesTitulo")
        localStorage.removeItem("filmesGenero")

        //primeiro irá gravar em localStorage os filmes não selecionados
        for (i = 1; i < ckExcluir.length; i++) {
            //se não está selecionado(para exclusão)
            if (!ckExcluir[i].checked) {
                //obtém o conteúdo da tabela(conluna 0: título; coluna 1: gênero)
                var titulo = tbFilmes.rows[i].cells[0].textContent
                var genero = tbFilmes.rows[i].cells[1].textContent
                gravarFilme(titulo, genero)         //chama função gravaFilme com dados da tabela
            }
        }
        //agora irá remover as linhas selecionadas(do fim para o início)
        for (i = ckExcluir.length - 1; i > 0; i--) {
            if (ckExcluir[i].checked) {
                tbFilmes.deleteRow(i)       //remove a linha
            }
        }

        ckExcluir[0].checked = false        //desmarca ckTodos(que é o input 0)
    }
}
var btExcluir = document.getElementById('btExcluir')
btExcluir.addEventListener('click', removerFilmes)