function montarTabela() {
    //se houver dados salvos em localStorage
    if (localStorage.getItem("jogoPalavra")) {
        //obtém connteúdo e converte em elementos de vetor (na ocorrência ";")
        var palavras = localStorage.getItem("jogoPalavra").split(';')
        var dicas = localStorage.getItem("jogoDica").split(';')

        //cria referência ao elemento tbPalavras
        var tbPalavras = document.getElementById('tbPalavras')

        //declara as variáveis linha e colunas
        var linha, col1, col2, col3;

        //percorre elementos do vetor e os insere na tabela
        for (var i = 0; i < palavras.length; i++) {
            //adiciona uma linha na tabela
            linha = tbPalavras.insertRow(-1)
            //adiciona colunas na linha inserida
            col1 = linha.insertCell(0)
            col2 = linha.insertCell(1)
            col3 = linha.insertCell(2)

            //joga um conteúdo em cada célula
            col1.textContent = palavras[i]
            col2.textContent = dicas[i]
            col3.innerHTML = "<input type='checkbox'>"      //exibe campo checkbox
        }
    }
}
//cria referência ao ckMostrar(se marcado, deve exibir tabela e botão excluir)
var ckMostrar = document.getElementById('ckMostrar')
//cria function anônima, associa ao evento change do checkbox
ckMostrar.addEventListener('change', function () {
    //se marcado exibe tabela (palavras e dicaa) e exibe o botão excluir, senão recarrega a pág.
    if (ckMostrar.checked) {
        montarTabela()
        btExcluir.className = "btn btn-danger exibe"
    } else {
        location.reload()
    }
})
//cria referência ao checkbox ckTodos(na linha de título da tabela)
var ckTodos = document.getElementById('ckTodos')
//executa function anônima quando houver uma troca de status
ckTodos.addEventListener('change', function () {
    //cria referência à tabela e aos campos input(filhos da tabela)
    var tbPalavras = document.getElementById('tbPalavras')
    var ckExcluir = tbPalavras.getElementsByTagName('input')

    var status = ckTodos.checked        //obtém status de todos...

    //percorre os demas checkbox para aplicar este status
    for (var i = 1; i < ckExcluir.length; i++) {
        ckExcluir[i].checked = status
    }
})

function removerPalavras() {
    //cria referência à tabela e aos input(filhos da tabela)
    var tbPalavras = document.getElementById('tbPalavras')
    var ckExcluir = tbPalavras.getElementsByTagName('input')

    //para verificar se há palavras selecionadas
    var temSelecionado = false

    //percorre campos input type checkbox da tabela (exceto "Todos" no título)
    for (var i = 1; i < ckExcluir.length; i++) {
        //se está selecionado, muda valor da "flag", e sai da repetição
        if (ckExcluir[i].checked) {
            temSelecionado = true
            break
        }
    }
    //se não temSelecionado(se valor da variável é false)
    if (!temSelecionado) {
        alert('Não há palavras selecionadas para exclusão!!')
        return
    }
    //solicita confirmação de exclusão das palavras selecionadas
    if (confirm('Confirma exclusão das palavras selecionadas??')) {
        //exclui conteúdo armazenado em localStorage
        localStorage.removeItem("jogoPalavra")
        localStorage.removeItem("jogoDica")

        //para acumular as palavras da tabela
        palavras = ''
        dicas = ''

        //primeiro irá gravar em localStorage as palavras não selecionadas
        for (var i = 1; i < ckExcluir.length; i++) {
            //se não está selecionado(para exclusão)
            if (!ckExcluir[i].checked) {
                //obtém o conteúdo da tabela (coluna 0:palavra; coluna 1:dica)
                palavras += tbPalavras.rows[i].cells[0].textContent + ';'
                dicas += tbPalavras.rows[i].cells[1].textContent + ';'
            }
        }
        //se vazio, significa que marcou todos checkbox(não salva em localStorage)
        if (palavras != '') {
            //.length -1 (para retirar o último ";")
            localStorage.setItem("jogoPalavra", palavras.substr(0, palavras.length - 1))
            localStorage.setItem("jogoDica", dicas.substr(0, dicas.length - 1))
        }
        //agora irá remover as linhas selecionadas (do fim para início)
        for (var i = ckExcluir.length - 1; i > 0; i--) {
            if (ckExcluir[i].checked) {
                //remove a linha
                tbPalavras.deleteRow(i)
            }
        }
        ckExcluir[0].checked = false        //desmarca ckTodos(que é o input 0)
    }
}
//cria referência ao elemento botão btExcluir e associa ao evento click a function indicada
var btExcluir = document.getElementById('btExcluir')
btExcluir.addEventListener('click', removerPalavras)
