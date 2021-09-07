function exibirVelas() {
    //cria referencia ao elementdo da pag. e obtem conteudo do campo
    var inIdade = document.getElementById('inIdade')
    var idade = Number(inIdade.value)

    //verifica preenchimento do campo
    if (idade <= 0 || idade > 120 || isNaN(idade)) {
        alert('Informe uma idade valida... Entre 1 e 120 anos')
        inIdade.focus()
        return
    }
    /*tranforma valor de idade em uma string, cria referencia 
    ao elemento divIdade e cria uma varivel acumuladora para imagem*/
    var strIdade = idade.toString()
    var divIdade = document.getElementById('divIdade')
    var img

    //percorre string strIdade e vamos manipular adicionar imagem das velas
    for (var i = 0; i < strIdade.length; i++) {
        img = document.createElement('img')
        img.src = "img/" + strIdade.charAt(i) + ".jpg"
        img.alt = "Vela de" + strIdade.charAt(i) + "anos"
        divIdade.appendChild(img)
    }

    btExibir.disabled = true    //apois laco for desativa botão btExibir e....
    btNovas.focus()            //foco vai para botão btNovas

}
//cria referencia ao botão e associa evento click a function exibirVelas
var btExibir = document.getElementById('btExibir')
btExibir.addEventListener('click', exibirVelas)

//cria referencia ao botão btNovas e associa evento click e function
var btNovas = document.getElementById('btNovas')
btNovas.addEventListener('click', function () {
    location.reload()
})