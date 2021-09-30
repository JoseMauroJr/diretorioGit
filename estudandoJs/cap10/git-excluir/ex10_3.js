function cadastrarPalavra() {
    //cria referência aos elementos de entrada de dados
    var inPalavra = document.getElementById('inPalavra')
    var inDica = document.getElementById('inDica')

    var palavra = inPalavra.value       //obtém valor dos campo
    var dica = inDica.value

    //valida o preenchimento (palavra não deve possuir espaço em branco)
    if (palavra == '' || dica == '' || palavra.indexOf(" ") >= 0) {
        alert('Informe uma palavra válida (sem espaço) e sua dica correspondente')
        inPalavra.focus()
        return
    }
    //se já existe...
    if (localStorage.getItem("jogoPalavra")) {
        //grava conteúdo anterior + ";" e a palavra / dica
        localStorage.setItem("jogoPalavra", localStorage.getItem("jogoPalavra") + ';' + palavra)
        localStorage.setItem("jogoDica", localStorage.getItem("jogoDica") + ';' + dica)
    } else {
        //senão, é a primeira inclusão: grava apenas a palavra e dica
        localStorage.setItem("jogoPalavra", palavra)
        localStorage.setItem("jogoDica", dica)
    }
    //verifica se salvou
    if (localStorage.getItem("jogoPalavra")) {
        alert('Ok! Palavra ' + palavra + ' cadastrada com sucesso!')
    }
    //limpa campos de edição e joga foco em inPalavra
    inPalavra.value = ''
    inDica.value = ''
    inPalavra.focus()
}
//cria referência ao elemento botão e associa function ao evento click
var btCadastrar = document.getElementById('btCadastrar')
btCadastrar.addEventListener('click', cadastrarPalavra)