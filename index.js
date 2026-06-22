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

const urlDoGoogleScript = "https://script.google.com/macros/s/AKfycbx03-3oP6n6Jf5tV6AH5Ktn0G97tPoxV7_GY3nwed0QqCopUxkH2navb6MsDwf7exodHQ/exec";

// Função para disparar quando o formulário for enviado
document.getElementById("Forms").addEventListener("submit", function(e) {
  e.preventDefault(); // Impede a página de recarregar

  // Cria o objeto com os dados dos inputs do formulário
  const dadosDoForm = {
    nome: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    curso: document.getElementById("curso").value
  };

  // Envia para o Google Sheets
  fetch(urlDoGoogleScript, {
    method: "POST",
    mode: "no-cors", // Necessário para evitar erros de segurança do navegador
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dadosDoForm)
  })
  .then(() => {
    alert("Dados enviados com sucesso para a planilha!");
  })
  .catch(erro => console.error("Erro ao enviar:", erro));
});
