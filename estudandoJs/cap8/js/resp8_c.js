function adicionarServico() {
    //cria referência ao elemento da página e obtém o conteúdo com campo de entrada
    var inServico = document.getElementById('inServico')
    var servico = inServico.value

    //verifica se campo foi preenchido
    if (servico == '') {
        alert('Informe o serviço - Veículo a ser adicionado')
        inServico.focus()
        return
    }

    //verifica se já existe serviço salvo em localStorage
    if (localStorage.getItem('herbieServico')) {
        localStorage.setItem('herbieServico', localStorage.getItem('herbieServico') + ';' + servico)
    } else {
        localStorage.setItem('herbieServico', servico)
    }

    mostrarPendentes()      //chama função que vai mostrar serviços pendentes

    //limpa campo inServico
    inServico.value = ''
    inServico.focus()
}
//cria referência ao botão e associa ao evento click a função adicionarServico
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarServico)

function mostrarPendentes() {
    //cria referência ao elemento da página cria variável para receber números de serviços pendentes
    var outPendentes = document.getElementById('outPendentes')
    var numPendentes

    //verifica se tem serviços salvos e localStorage e associa a serviços pendentes
    if (localStorage.getItem('herbieServico')) {
        numPendentes = localStorage.getItem('herbieServico').split(';').length
    } else {
        numPendentes = 0
    }
    //altera tag outPendentes
    outPendentes.textContent = numPendentes

}
mostrarPendentes()          //chama função

function executarServico() {
    //verifica se não tem serviço pendente para ser excutado
    if (!localStorage.getItem('herbieServico')) {
        alert('Não há serviços pendentes para executar!!')
        return
    }

    //cria referência ao elemento da página e cria uma variável que vai conter os serviços a ser excutados
    var outExecucao = document.getElementById('outExecucao')
    var servicos = localStorage.getItem('herbieServico').split(';')

    //cria variável que remove um serviço póis foi executado
    var emExecucao = servicos.shift()       //remove primeira string da lista
    outExecucao.textContent = emExecucao   //mostra a string removida

    //pega os seviços que falta ser excutado junta todos numa nova lista
    localStorage.setItem('herbieServico', servicos.join(';'))

    mostrarPendentes()      //chama função mostrarPendentes novamente
}
//cria referência ao elemento botão e associa evento click a função
var btExecutar = document.getElementById('btExecutar')
btExecutar.addEventListener('click', executarServico)