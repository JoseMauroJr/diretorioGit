function incluirAposta() {
    //cria referência aos elementos de entrada de dados da página
    var inNome = document.getElementById('inNome')
    var inPeso = document.getElementById('inPeso')

    //obtém os conteúdos dos campos de entrada
    var nome = inNome.value
    var peso = Number(inPeso.value)

    //varifica se os campos está vazios ou NaN
    if (nome == '' || peso == 0 || isNaN(peso)) {
        //exibe alerta, joga cursor em nome e abandona execução da function
        alert('Informe nome e peso da aposta')
        inNome.focus()
        return
    }

    //chama function que verifica se peso já foi apostado
    if (verApostaExiste(peso)) {
        alert('Alguém já apostou este peso, informe outro por favor!!')
        inPeso.focus()
        return
    }

    //se houver dados salvos no localStorage
    if (localStorage.getItem('melanciaNome')) {
        //obtém o conteúdo já salvo e acrescenta ';' + dados da aposta
        var melanciaNome = localStorage.getItem('melanciaNome') + ';' + nome
        var melanciaPeso = localStorage.getItem('melanciaPeso') + ';' + peso

        //salva os dados em localStorage
        localStorage.setItem('melanciaNome', melanciaNome)
        localStorage.setItem('melanciaPeso', melanciaPeso)
    } else {
        //senão, é a primeira aposta (não tem ';' salva os dados)
        localStorage.setItem('melanciaNome', nome)
        localStorage.setItem('melanciaPeso', peso)
    }
    //chama a function que mostra as apostas já salvas
    mostrarApostas()

    //limpa os campos de formulário e joga foco(cursor) no campo inNome
    inNome.value = ''
    inPeso.value = ''
    inNome.focus()
}
//cria referência ao botão e associa a ocorrência do evento click à function
var btApostar = document.getElementById('btApostar')
btApostar.addEventListener('click', incluirAposta)

function verApostaExiste(peso) {
    //valor inicial é false
    var existe = false

    //se existe algum dado salvo em localStorage
    if (localStorage.getItem('melanciaPeso')) {
        //obtém seu conteúdo. A string é dividida em itens de vetor a cada ';'
        var pesos = localStorage.getItem('melanciaPeso').split(';')

        /*verifica se existe com indexOf(), o peso deve ser convertido em string,
         pois o vetor a cada ';' */
        if (pesos.indexOf(peso.toString()) >= 0) {
            existe = true              //apenas neste caso troca o valor do 'flag'
        }
    }
    return existe                   //retorna true ou false
}

function mostrarApostas() {
    //cria referência ao elemento que exibe as apostas
    var outApostas = document.getElementById('outApostas')

    //se não há apostas armazenadas em localStorage
    if (!localStorage.getItem('melanciaNome')) {
        //limpa o espaço de exibição das apostas (para  quando 'Limpar apostas')
        outApostas.textContent = ''
        return                              //retorna (não executa os comandos abaixo)
    }
    /*obtém o conteúdo das variáveis salvas no localStorage, 
    separando-as em elementos de vetor a cada ocorrência do ';' */
    var nomes = localStorage.getItem('melanciaNome').split(';')
    var pesos = localStorage.getItem('melanciaPeso').split(';')

    //irá acumular as linhas a serem exibidas
    var linhas = ''

    //repetição para percorrer todos os elementos do vetor
    for (var i = 0; i < nomes.length; i++) {
        //concatena em linhas os nomes dos apostadores e sua apostas
        linhas += nomes[i] + ' - ' + pesos[i] + 'gr \n'
    }
    //exibe as linhas (altera o conteúdo do elemento outApostas)
    outApostas.textContent = linhas
}
//chama function quando a página é carregada, para mostrar apostas salvas
mostrarApostas()

function verificarVencedor() {
    //se não há apostas armazenadas em localStorage
    if (!localStorage.getItem('melanciaNome')) {
        alert('Não há apostas cadastradas')
        return                      //retorna (não executa os comandos abaixo)
    }

    //solicita o peso correto de melancia
    var pesoCorreto = Number(prompt('Qual o peso correto da Melancia?'))

    //se não informou, retorna
    if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
        return
    }

    //obtém os dados armazenados, separando-os em elementos de vetor
    var nomes = localStorage.getItem('melanciaNome').split(';')
    var pesos = localStorage.getItem('melanciaPeso').split(';')

    //valor inicial para vencedor é o da primeira aposta
    var vencedorNome = nomes[0]
    var vencedorPeso = Number(pesos[0])

    //percorre as apostas
    for (var i = 0; i < nomes.length; i++) {
        //calcula a diferença de peso do "vencedor" e da aposta atual
        difVencedor = Math.abs(vencedorPeso - pesoCorreto)
        difAposta = Math.abs(Number(pesos[i]) - pesoCorreto)

        //se a diferença da aposta atual (no for) for menor que a do "vencedor"
        if (difAposta < difVencedor) {
            vencedorNome = nomes[i]             //troca o "vencedor"
            vencedorPeso = Number(pesos[i])    //para este elemento

        }
    }
    //mostrar mensagem com dados do vencedor
    var mensagem = 'Resultado - Peso Correto: ' + pesoCorreto + 'gr'
    mensagem += '\n -----------------------------------------------'
    mensagem += '\nVencedor: ' + vencedorNome
    mensagem += '\nAposta: ' + vencedorPeso + 'gr'
    alert(mensagem)
}
//cria referência ao botão e associa a ocorrência do evento click à function
var btVencedor = document.getElementById('btVencedor')
btVencedor.addEventListener('click', verificarVencedor)

function limparApostas() {
    //solicita confirmação para excluir as apostas
    if (confirm('Confirma exclusão de todas as apostas??')) {
        localStorage.removeItem('melanciaNome')         //remove as variáveis salvas
        localStorage.removeItem('melanciaPeso')        //em localStorage
        mostrarApostas()                              //exibe a listagem vazia
    }
}
//cria referência ao botão e associa a ocorrência do evento click à function
var btLimpar = document.getElementById('btLimpar')
btLimpar.addEventListener('click', limparApostas)