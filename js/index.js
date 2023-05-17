const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");

const botaoMostrarExplicacao = document.getElementById("mostrar-explicacao");
const botaoMostrarExplicacaoB = document.getElementById("mostrar-explicacao-b");
const botaoMostrarExplicacaoC = document.getElementById("mostrar-explicacao-c");
const botaoMostrarExplicacaoD = document.getElementById("mostrar-explicacao-d");
const botaoMostrarExplicacaoE = document.getElementById("mostrar-explicacao-e");
const botaoMostrarExplicacaoF = document.getElementById("mostrar-explicacao-f");
const botaoMostrarExplicacaoG = document.getElementById("mostrar-explicacao-g");
const botaoMostrarExplicacaoH = document.getElementById("mostrar-explicacao-h");
const botaoMostrarExplicacaoI = document.getElementById("mostrar-explicacao-i");
const botaoMostrarExplicacaoJ = document.getElementById("mostrar-explicacao-j");
const botaoMostrarExplicacaoL = document.getElementById("mostrar-explicacao-l");
const botaoMostrarExplicacaoM = document.getElementById("mostrar-explicacao-m");


const conteudoVersiculo = document.getElementById("conteudo-versiculo");
const conteudoVersiculoB = document.getElementById("conteudo-versiculo-b");
const conteudoVersiculoC = document.getElementById("conteudo-versiculo-c");
const conteudoVersiculoD = document.getElementById("conteudo-versiculo-d");
const conteudoVersiculoE = document.getElementById("conteudo-versiculo-e");
const conteudoVersiculoF = document.getElementById("conteudo-versiculo-f");
const conteudoVersiculoG = document.getElementById("conteudo-versiculo-g");
const conteudoVersiculoH = document.getElementById("conteudo-versiculo-h");
const conteudoVersiculoI = document.getElementById("conteudo-versiculo-i");
const conteudoVersiculoJ = document.getElementById("conteudo-versiculo-j");
const conteudoVersiculoL = document.getElementById("conteudo-versiculo-l");
const conteudoVersiculoM = document.getElementById("conteudo-versiculo-m");



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



botaoMostrarExplicacaoB.addEventListener("click", () => {

  if(conteudoVersiculoB.style.display === "block"){
    conteudoVersiculoB.style.display = "none";
    } else{
    conteudoVersiculoB.style.display = "block";
    }

    const card = document.querySelector(".conteudo-versiculo")
    card.classList.toggle("active")

    if(card.classList.contains("active")) {
      return botaoMostrarExplicacaoB.textContent = "Voltar"
    }
    

    botaoMostrarExplicacaoB.textContent = "Entenda o versículo"

});



botaoMostrarExplicacaoC.addEventListener("click", () => {

  if(conteudoVersiculoC.style.display === "block"){
    conteudoVersiculoC.style.display = "none";
    } else{
    conteudoVersiculoC.style.display = "block";
    }

    const card = document.querySelector(".conteudo-versiculo")
    card.classList.toggle("active")

    if(card.classList.contains("active")) {
      return botaoMostrarExplicacaoC.textContent = "Voltar"
    }
    

    botaoMostrarExplicacaoC.textContent = "Entenda o versículo"

});

botaoMostrarExplicacaoD.addEventListener("click", () => {

  if(conteudoVersiculoD.style.display === "block"){
    conteudoVersiculoD.style.display = "none";
    } else{
    conteudoVersiculoD.style.display = "block";
    }

    const card = document.querySelector(".conteudo-versiculo")
    card.classList.toggle("active")

    if(card.classList.contains("active")) {
      return botaoMostrarExplicacaoD.textContent = "Voltar"
    }
    

    botaoMostrarExplicacaoD.textContent = "Entenda o versículo"

});

botaoMostrarExplicacaoE.addEventListener("click", () => {

  if(conteudoVersiculoE.style.display === "block"){
    conteudoVersiculoE.style.display = "none";
    } else{
    conteudoVersiculoE.style.display = "block";
    }

    const card = document.querySelector(".conteudo-versiculo")
    card.classList.toggle("active")

    if(card.classList.contains("active")) {
      return botaoMostrarExplicacaoE.textContent = "Voltar"
    }
    

    botaoMostrarExplicacaoE.textContent = "Entenda o versículo"

});

botaoMostrarExplicacaoF.addEventListener("click", () => {

  if(conteudoVersiculoF.style.display === "block"){
    conteudoVersiculoF.style.display = "none";
    } else{
    conteudoVersiculoF.style.display = "block";
    }

    const card = document.querySelector(".conteudo-versiculo")
    card.classList.toggle("active")

    if(card.classList.contains("active")) {
      return botaoMostrarExplicacaoF.textContent = "Voltar"
    }
    

    botaoMostrarExplicacaoF.textContent = "Entenda o versículo"

});


botaoMostrarExplicacaoG.addEventListener("click", () => {

  if(conteudoVersiculoG.style.display === "block"){
    conteudoVersiculoG.style.display = "none";
    } else{
    conteudoVersiculoG.style.display = "block";
    }

    const card = document.querySelector(".conteudo-versiculo")
    card.classList.toggle("active")

    if(card.classList.contains("active")) {
      return botaoMostrarExplicacaoG.textContent = "Voltar"
    }
    

    botaoMostrarExplicacaoG.textContent = "Entenda o versículo"

});


botaoMostrarExplicacaoH.addEventListener("click", () => {

  if(conteudoVersiculoH.style.display === "block"){
    conteudoVersiculoH.style.display = "none";
    } else{
    conteudoVersiculoH.style.display = "block";
    }

    const card = document.querySelector(".conteudo-versiculo")
    card.classList.toggle("active")

    if(card.classList.contains("active")) {
      return botaoMostrarExplicacaoH.textContent = "Voltar"
    }
    

    botaoMostrarExplicacaoH.textContent = "Entenda o versículo"

});



botaoMostrarExplicacaoI.addEventListener("click", () => {

  if(conteudoVersiculoI.style.display === "block"){
    conteudoVersiculoI.style.display = "none";
    } else{
    conteudoVersiculoI.style.display = "block";
    }

    const card = document.querySelector(".conteudo-versiculo")
    card.classList.toggle("active")

    if(card.classList.contains("active")) {
      return botaoMostrarExplicacaoI.textContent = "Voltar"
    }
    

    botaoMostrarExplicacaoI.textContent = "Entenda o versículo"

});



botaoMostrarExplicacaoJ.addEventListener("click", () => {

  if(conteudoVersiculoJ.style.display === "block"){
    conteudoVersiculoJ.style.display = "none";
    } else{
    conteudoVersiculoJ.style.display = "block";
    }

    const card = document.querySelector(".conteudo-versiculo")
    card.classList.toggle("active")

    if(card.classList.contains("active")) {
      return botaoMostrarExplicacaoJ.textContent = "Voltar"
    }
    

    botaoMostrarExplicacaoJ.textContent = "Entenda o versículo"

});



botaoMostrarExplicacaoL.addEventListener("click", () => {

  if(conteudoVersiculoL.style.display === "block"){
    conteudoVersiculoL.style.display = "none";
    } else{
    conteudoVersiculoL.style.display = "block";
    }

    const card = document.querySelector(".conteudo-versiculo")
    card.classList.toggle("active")

    if(card.classList.contains("active")) {
      return botaoMostrarExplicacaoL.textContent = "Voltar"
    }
    

    botaoMostrarExplicacaoL.textContent = "Entenda o versículo"

});



botaoMostrarExplicacaoM.addEventListener("click", () => {

  if(conteudoVersiculoM.style.display === "block"){
    conteudoVersiculoM.style.display = "none";
    } else{
    conteudoVersiculoM.style.display = "block";
    }

    const card = document.querySelector(".conteudo-versiculo")
    card.classList.toggle("active")

    if(card.classList.contains("active")) {
      return botaoMostrarExplicacaoM.textContent = "Voltar"
    }
    

    botaoMostrarExplicacaoM.textContent = "Entenda o versículo"

});
























