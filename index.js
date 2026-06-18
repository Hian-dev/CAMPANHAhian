var Juliana = window.document.getElementById("Juliana")
var Lucas = window.document.getElementById("Lucas")
var Mariana = window.document.getElementById("Mariana")
var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    Juliana.style = "display:none"
    Mariana.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}

function RolarParaEsquerda(){
    Juliana.style = "display:flex"
    Mariana.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}