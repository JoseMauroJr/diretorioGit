function adicionarProduto() {
    //cria referência ao elemento da página e obtém o conteúdo do campo de entrada
    var inProduto = document.getElementById('inProduto')

    var produto = inProduto.value

    //verifica se campo foi preenchido
    if (produto == '') {
        alert('Informe o Produto!')
        inProduto.focus()
        return
    }

    //se houver dados salvos
    if (localStorage.getItem('comprasProduto')) {
        //obtém itens separando-os em elementos de vetor
        produtos = localStorage.getItem('comprasProduto').split(';')

        //adiciona um novo produto a lista
        produtos.push(produto)

        //classificar o vetor
        produtos.sort()

        //salvar vetor classificado (com elementos separados)
        localStorage.setItem('comprasProduto', produtos.join(';'))
    } else {
        //senão(é a primeira inclusão) salva apenas o produto
        localStorage.setItem('comprasProduto', produto)
    }
    //chama função listarProduto e limpa o campo de entrada
    listarProdutos()

    inProduto.value = ''
    inProduto.focus()
}
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarProduto)

function listarProdutos() {
    //crie referência ao elemento da página
    var outCompras = document.getElementById('outCompras')

    //verifica se já tem lista de produtos salva
    if (!localStorage.getItem('comprasProduto')) {
        outCompras.textContent = ''
        return
    }
    //salva vetor classificado
    produtos = localStorage.getItem('comprasProduto').split(';')

    //modifica tag outCompras
    outCompras.textContent = 'Produtos Adicionados\n --------------------------\n' + produtos.join('\n')

}
listarProdutos()

function limparLista() {
    if (localStorage.getItem('comprasProduto')) {

        if (confirm('Deseja realmente excluir todos itens da lista??')) {

            localStorage.removeItem('comprasProduto')
            listarProdutos()
        }
    } else {
        alert('lista está vazia....')
    }
}
var btLimpar = document.getElementById('btLimpar')
btLimpar.addEventListener('click', limparLista)