const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");

const botaoMostrarExplicacao = document.getElementById("mostrar-explicacao");
const conteudoVersiculo = document.getElementById("conteudo-versiculo");



botaoAlterarTema.addEventListener("click", () => {
  body.classList.contains("tema-dois");
 
  body.classList.toggle("tema-dois");


});


botaoMostrarExplicacao.addEventListener("click", () => {


  if(conteudoVersiculo.style.display === "block"){
    conteudoVersiculo.style.display = "none";
    } else{
    conteudoVersiculo.style.display = "block";
    }


    const card = document.querySelector(".conteudo-versiculo")
    card.classList.toggle("active")

    if(card.classList.contains("active")) {
      return botaoMostrarExplicacao.textContent = "Voltar"
    }
    

    botaoMostrarExplicacao.textContent = "Entenda o versículo"


});


















