//primeiro, pego os elementos que vou usar
const botao = document.getElementById("botao1")
const titulo = document.getElementById("titulo1")

//depois, crio a função que faz o que eu quero
function trocarCor (){
    titulo.style.color = '#' + Math.floor(Math.random() * 116777215).toString(16)  
} 

//Por último, adicionamos o EVENTO que vai disparar a nossa função e aí executar o que queremos
botao.addEventListener("click",trocarCor) //addEventListener serve para adicionar um evento e chamar nossa função

const botao2 = document.getElementById("botao2")

function exibirMensagem (){
    alert("Você clicou duas vezes!")
}

botao2.addEventListener("dblclick",exibirMensagem)


const botao3 = document.getElementById("botao3")

function alteraFundo(){
    document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
}

botao3.addEventListener("contextmenu", alteraFundo)

/////////////////////////////////////////////

const titulo2 = document.getElementById("tecla")

let contagem = 0;

function teclaPressionada(event){
   //titulo2.textContent = `Tecla Pressionada: ${event.key}` 
contagem ++
    titulo2.textContent = `Você pressionou ${contagem} teclas!`
}

document.addEventListener("keydown",teclaPressionada)


function frase (){
    alert("E ai cpx!")
}

setInterval(frase, 5000)