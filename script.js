// pegando o elemento checklist 
const check = document.querySelector("#checkbox");

//pegando o h1 
const h1 = document.querySelector("#h1");

// adicionando evento de click para saber quando o label for clicado
check.addEventListener("click", changeBackground);

//função que executa a lógica da página
function changeBackground(){
    
    //adicionando ao body a classe dark, criada no arquivo CSS
    document.body.classList.toggle("dark");

    // adicionando ao h1 a classe de cor branca, criada no arquivo CSS
    h1.classList.toggle("color");
}
