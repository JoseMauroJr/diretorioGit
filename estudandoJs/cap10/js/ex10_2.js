const POLTRONAS = 240       //Constante com o número de poltronas do teatro

var reservadas = []         //vetor com as poltronas reservadas pelo cliente

function montarPalco() {
    //declara vetor para receber as poltronas ocupadas
    var ocupadas = []

    //verifica se há poltronas salvas em localStorage
    if (localStorage.getItem("teatroOcupadas")) {
        //preenche o vetor com as poltronas ocupadas do teatro(salvas em localStorage)
        ocupadas = localStorage.getItem("teatroOcupadas").split(";")
    }
    //captura divPalco, que é o local onde as imagens são inseridas
    var divPalco = document.getElementById('divPalco')

    //repetição para montar o nº total de poltronas(definida na const)
    for (var i = 1; i <= POLTRONAS; i++) {
        var figure = document.createElement('figure')   //cria tag figure
        var imgStatus = document.createElement('img')   //cria tag img

        //se consta em ocupadas imagem ocupada.jpg, se não constar... imagem disponivel.jpg
        if (ocupadas.indexOf(i.toString()) >= 0) {
            imgStatus.src = "img/ocupada.jpg"
        } else {
            imgStatus.src = "img/disponivel.jpg"
        }
        imgStatus.className = "poltrona"            //classe com dimesão da img

        var figureCap = document.createElement('figcaption')    //cria figcaption

        var zeros = ''

        //condições para exibir zeros na poltronas, menores que 10
        if (i < 10) {
            zeros = '00'
        } else {
            //menores que 100
            zeros = '0'
        }

        var num = document.createTextNode('[' + zeros + i + ']')    //cria texto

        //define os pais de cada tag criada
        figureCap.appendChild(num)
        figure.appendChild(imgStatus)
        figure.appendChild(figureCap)

        //se módulo 24, restar 12 (é o corredor)
        if (i % 24 == 12) {
            figure.style.marginRight = "60px"   //define margem direita de 60px
        }

        divPalco.appendChild(figure)        //indica que figure é filha de divPalco

        //se módulo 24, restar 0 cria tag br(quebra de linha)
        if (i % 24 == 0) {
            var br = document.createElement('br')
            divPalco.appendChild(br)        //indica que br é filha de divPalco
        }
    }
}
montarPalco()       //chama function

function reservarPoltrona() {
    var poltrona = Number(inPoltrona.value) //btém conteúdo da inPoltrona

    //valida o preenchimento do campo de entrada... não pode ser maior que a const
    if (poltrona <= 0 || isNaN(poltrona) || poltrona > POLTRONAS) {
        alert('Informe um número de poltrona válido')
        inPoltrona.focus()
        return
    }
    //declara vetor para receber as poltronas ocupadas
    var ocupadas = []

    //se há poltronas salvas em localStorag
    if (localStorage.getItem("teatroOcupadas")) {
        //preenche o vetor com as poltronas ocupadas do teatro (salvas em localStorage)
        ocupadas = localStorage.getItem("teatroOcupadas").split(";")
    }
    //se poltrona escolhida já está ocupada(existe em localStorage)
    if (ocupadas.indexOf(poltrona.toString()) >= 0) {
        alert('Poltrona ' + poltrona + ' já está ocupada...')
        inPoltrona.value = ''
        inPoltrona.focus()
        return
    }
    //captura divPalco para obter a imagem
    var divPalco = document.getElementById('divPalco')

    //captura imagem da poltrona, filha de divPalco. É -1 pois começa em 0
    var imgPoltrona = divPalco.getElementsByTagName('img')[poltrona - 1]
    imgPoltrona.src = "img/reservada.jpg"       //modifica atributo da imagem

    reservadas.push(poltrona)       //adiciona poltrona ao vetor reservadas

    inPoltrona.value = ''           //limpa campo
    inPoltrona.focus()              //joga o foco em inPoltrona

}
//cria referência ao botão e associa ao evento click a function indicada
var btReservar = document.getElementById('btReservar')
btReservar.addEventListener('click', reservarPoltrona)

//cria referência ao campo de entrada inPoltrona
var inPoltrona = document.getElementById('inPoltrona')
inPoltrona.addEventListener('keypress', function (tecla) {
    if (tecla.keyCode == 13) {
        reservarPoltrona()
    }
})

function confirmarReserva() {
    //verifica se há poltrona reservada
    if (reservadas.length == 0) {
        alert('Não há poltronas reservadas!!')
        inPoltrona.focus()
        return
    }
    //captura divPalco para obter as imagens
    var divPalco = document.getElementById('divPalco')

    //variável de string vazia que vai concatenar, recebendo valor de poltrona ocupada
    var ocupadas = ''
    //verifica se poltrona salva em localStorage
    if (localStorage.getItem("teatroOcupadas")) {
        ocupadas = localStorage.getItem("teatroOcupadas") + ";"
    }
    //cria laço for que vai percorrer reserva e atribuir em ocupadas
    for (var i = 0; i < reservadas.length; i++) {
        ocupadas += reservadas[i] + ';'

        //captura imagem da poltrona, filha de divPalco. É -1 pois começa em 0
        var imgPoltrona = divPalco.getElementsByTagName('img')[reservadas[i] - 1]
        //modifica atributo da imagem
        imgPoltrona.src = "img/ocupada.jpg"
    }
    //limpa vetor(pois as reservas já foram salvas em localStorage)
    reservadas = []

    //.length-1 é para retirar o último ";"
    localStorage.setItem("teatroOcupadas", ocupadas.substr(0, ocupadas.length - 1))

}
//cria referência ao botão e associa o evento click a function indicada
var btConfirmar = document.getElementById('btConfirmar')
btConfirmar.addEventListener('click', confirmarReserva)