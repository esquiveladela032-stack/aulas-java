`use strict`;

//selecionando  os elementos

const forexercicio07 = document.querySelector("#exercicio07")
const inputnota1 = document.querySelector("#nota1")
const input = document.querySelector("#nota2")

//Detectando o acionamentovdo formulario 
forexercicio07.addEventListener("submit", function () {
    event.preventDefault();
    //acessando os elementos e pegar os valores
    const nota1 = Number(inputnota1.value);
    const nota2 = Number(inputnota2.value);

    const media = (nota1 + nota2) / 2;

    console.log(media);



    pMedia.textContent = media;



    if (media >= 6) {

        pSituacao.textContent = "Aprovado 🤩";

        divResultados.style.color = "green";

    }



    else {

        pSituacao.textContent = "Reprovado😥";

        pSituacao.style.color = "red";

    }







})









