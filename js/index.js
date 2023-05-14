const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
botaoAlterarTema.addEventListener("click", () => {
    const temaDois = body.classList.contains("tema-dois");
    if(temaDois){
        body.classList.remove("tema-dois");
    }else{
        body.classList.add("tema-dois");
    }
});

