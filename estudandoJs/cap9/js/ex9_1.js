function adicionarTarefa() {
    //cria referência ao campo de entrada de dados e obtém o conteúdo do campo de entrada
    var inTarefa = document.getElementById('inTarefa')
    var tarefa = inTarefa.value

    //verifica se não foi preenchido 
    if (tarefa == '') {
        alert('Informe a tarefa!!!')
        inTarefa.focus()
        return
    }

    //cria referência ao elemento divQuadro (local onde tag h5 será inserida)
    var divQuadro = document.getElementById('divQuadro')
    var h5 = document.createElement('h5')               //cria o elemento html h5
    var texto = document.createTextNode(tarefa)        //cria um texto
    h5.appendChild(texto)                             //define que o texto será filho de h5
    divQuadro.appendChild(h5)                        //define que h5 será filho de divQuadro

    inTarefa.value = ''         //limpa o campo de edição
    inTarefa.focus()           //joga o cursor neste campo
}
//cria referência ao btAdicionar e após associa evento à função
var btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarTarefa)

function selecionarTarefa() {
    var h5 = document.getElementsByTagName('h5')        //obtém tags h5 da página
    var numH5 = h5.length                               //obtém número de tags h5

    //se tamanho de número de tags h5 for zero exibe alerta
    if (numH5 == 0) {
        alert('Não há tarefas para selecionar')
        return
    }

    var aux = -1                        //variável auxiliar para indicar linha selecionada

    //percorre s lista de elementos h5 inseridos na página
    for (var i = 0; i < numH5; i++) {
        //se tag é da class tarefaSelecionada(está selecionada)
        if (h5[i].className == 'tarefaSelecionada') {
            h5[i].className = 'tarefaNormal'            //troca para normal
            aux = i                                     //muda valor da variável auxiliar
            break                                       //sai da repetição
        }
    }
    //se a linha que está selecionada é a última, irá voltar para a primeira
    if (aux == numH5 - 1) {
        aux = -1
    }

    h5[aux + 1].className = 'tarefaSelecionada'         //muda estilo da próxima tag h5
}
//cria referência ao botão e associa ao evento click a função 
var btSelecionar = document.getElementById('btSelecionar')
btSelecionar.addEventListener('click', selecionarTarefa)

function retirarSelecionado() {
    //cria referência ao elemento que irá "perder" um filho
    var divQuadro = document.getElementById('devQuadro')
    var h5 = document.getElementsByTagName('h5')            //obtém tags h5 da página
    var numH5 = h5.length                                  //obtém quantidade de h5

    var aux = -1                                          //variável auxiliar para indicar linha selecionada

    //percorre a lista de elementos h5 inseridos na página
    for (var i = 0; i < numH5; i++) {
        //verifica className da tag h5 se selecionada muda valor da variável aux
        if (h5[i].className == 'tarefaSelecionada') {
            aux = i
            break
        }
    }
    //se não há tarefa selecionada(ou se lista estiver vazia)
    if (aux == -1) {
        alert('Informe uma tarefa para removê-la!!')
        return
    }
    //solicita confirmação(exibindo o conteúdo da tag h5 selecionado)
    if (confirm('Confirma Exclusão de ' + h5[aux].textContent + '??')) {
        divQuadro.removeChild(h5[aux])      //remove um dos filhos de divQuadro
    }
}
//cria referência ao botão e associa evento click a função
var btRetirar = document.getElementById('btRetirar')
btRetirar.addEventListener('click', retirarSelecionado)

function gravarTarefas() {
    var h5 = document.getElementsByTagName('h5')        //obtém tag h5 da página
    var numH5 = h5.length                               //obtém quantidade de h5

    //verifica se numH5 igual a zero
    if (numH5 == 0) {
        alert('Não há tarefas para serem salvas')
        return
    }

    var tarefas = ''                //irá acumular as tarefas

    //percorre a lista de elementos h5 inseridos na página
    for (var i = 0; i < numH5; i++) {
        tarefas += h5[i].textContent + ';'          //acumula conteúdo de cada h5
    }
    //grava as tarefas em localStorage, removendo o último ";"
    localStorage.setItem('tarefaDia', tarefas.substr(0, tarefas.length - 1))
    //confere se dados foram armazenados
    if (localStorage.getItem('tarefaDia')) {
        alert('Ok! Tarefas salvas!!')
    }
}
//cria referência ao botão e associa evento click a função
var btGravar = document.getElementById('btGravar')
btGravar.addEventListener('click', gravarTarefas)

function recuperarTarefas() {
    //verifica se há tarefas salvas no navegador
    if (localStorage.getItem('tarefasDia')) {
        //cria um vetor com a lista de tarefas(separados pelo split(";"))
        var tarefas = localStorage.getItem('tarefasDia').split(';')

        //cria referência ao divQuadro (local onde as tags h5 serão inseridas)
        var divQuadro = document.getElementById('divQuadro')

        //percorre todas as tarefas
        for (var i = 0; i < tarefas.length; i++) {
            var h5 = document.createElement('h5')       //cria o elemento h5
            var texto = document.createTextNode(tarefas[i])     //cria um texto
            h5.appendChild(texto)                   //define que texto é filho de h5
            divQuadro.appendChild(h5)               //define que h5 é filho de divQuadro
        }
    }
}
recuperarTarefas()