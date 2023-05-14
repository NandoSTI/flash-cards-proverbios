const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const vinteNoveVinteCinco = document.querySelector("explicacao");

botaoAlterarTema.addEventListener("click", () => {
  const temaDois = body.classList.contains("tema-dois");
 
  body.classList.toggle("tema-dois");



});

