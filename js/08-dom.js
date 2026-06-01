`use strict`;



/**Funções/métodos de seleção de elementos:

 

getElementByid, getElementByClassName, getElementByTagName
querySelector, querySelectorAll

 

 */

// Exemplo01

// Selecionando os elementos

const valor = document.querySelector("#valor");
const botaosomar = document.querySelector("#somar");
const botaosubtrair = document.querySelector("#subtrair");

console.log(valor);
console.log(botaosomar);
console.log(botaosubtrair);

// Monitorar o evento de clique nos botões
// Toda vez que acontecer o clique e um botão, alguma ação será feita



let contador = 0;
// Iniciando o botão subtrair com estado desabilitado



botaosubtrair.disabled = true //DEsabilitar o botao para "-"
botaosomar.addEventListener("click", function () {


    contador++;

    valor.textContent = contador;

    botaosubtrair.disabled = false // DESLIGADO
});

botaosubtrair.addEventListener("click", function () {


    // como impedir que o contador fique negativo?
    contador--;

    valor.textContent = contador; //Acessa e mostra

    if (contador === 0) botaosubtrair.disabled = true
});

const imgFoto = document.querySelector(".foto");

// selecionando todos os botões ao mesmo tempo

const botoesDeFoto = document.querySelectorAll("[data-foto]");

for (const botao of botoesDeFoto) {

    botao.addEventListener("click", function () {

        // console.log(botao.textContent);
        // lendo o valor do atributo data-foto

        const imagem = botao.dataset.foto;
        const texto = botao.dataset.texto;

        console.log(imagem, texto);
        //Adicionando ao img   a imagem e o text selecionados

        imgFoto.src = imagem;

        imgFoto.alt = texto;
    });
}

/* Exemplo 3 */
const textareaMensagem = document.querySelector("#mensagem")
const spanContadorCracteres = document.querySelector("#contador")
const spanContadorRegressivo = document.querySelector("#regressivo");

//evento"input":  captura do que é digitado em tempo real
textareaMensagem.addEventListener("input", function () {
    // console.log(textareaMensagem.value);

    //capturando a quantidade de caracteres digitados
    let totalCaracteres = textareaMensagem.value.length;
    // console.log(totalCaracteres);

    //exibir o total de caracteres no span
    spanContadorCracteres.textContent = totalCaracteres;

    //Contagem regressiva
    const limiteMaximo = 100;
    const contagemRegressiva = limiteMaximo - totalCaracteres;
    spanContadorRegressivo.textContent = contagemRegressiva;

    //Se o total de caracteres for maior ou igual a 100
    if (totalCaracteres >= 100) {
        //Entao aplicamos  a  classe excesso (negrito/vermelho) e muda a cor de fundo do campo
        spanContadorCracteres.classList.add("excesso");
        textareaMensagem.style.background = "green"
    } else {
        //Senão, remove a classe e tira acor de fundo do campo
        spanContadorCracteres.classList.remove("excesso");
        textareaMensagem.style.background = "transparent"

        //versão com ternario
        //spanContadorCaracteres.className = totalCracteres >=100 ? "excesso" : '';
    }

});

/* Exemplo 04  */
const kbdTeclaPressionada = document.querySelector("#tecla kbd");
console.log(kbdTeclaPressionada);

const pagina = document.body


//monitoramento de eventos de teclado sempre apartir de document
document.addEventListener("keypress", function (event) {
    //Capturando a tecla usada apartyir do evente.key
    const teclaUsada = event.key;

    //exibir a tecla no HTML
    kbdTeclaPressionada.textContent = teclaUsada;
    if (teclaUsada === "a") {
        kbdTeclaPressionada.style.background = "yellow";
        pagina.style.background = "darkblue";
        pagina.style.transition = "3s";
    }
    if (teclaUsada === "r") {
        kbdTeclaPressionada.style.background = "transparent";
        pagina.style.background = "#f4f4f4";
    }

});


//Exemplo  05
const inputTarefa = document.querySelector("#tarefa");
const botaoAdicionar = document.querySelector("#adicionar");
const listaTarefas = document.querySelector("#lista");

botaoAdicionar.addEventListener("click", function () {
    //capturar a tarefa digitada no input
    const tarefaDigitada = inputTarefa.value;

    //console.log(tarefaDigitada);
    //Validação: e se não for digitada nenhuma tarefa , interrompa a função
    if (tarefaDigitada === "") return;

    //Criar o elemento <li>
    const item = document.createElement("li")

    //Adicionando o conteudo (tarefa digitada) ao novo item <li>
    item.textContent = tarefaDigitada;

    //Inserindo o novo <li> na lista
    listaTarefas.appendChild(item);


    inputTarefa.value = "";//reset
    inputTarefa.focus(); //devolvendo o foco (cursor)

    item.addEventListener("click", function () {
        item.classList.toggle("feito"); //add
    });


});

//Mapeamento do Evento
//Detectar o ENTER  durante o uso do Input, e executar a função  de clique do botão adicionar

inputTarefa, addEventListener("keyup", function (event) {
    if (event.key === "Enter") botaoAdicionar.click();
})

// Exemplo 06
const formExemplo06 = document.querySelector("#exemplo06");
const inputNome = formExemplo06.querySelector("#nome");
const inputIdade = formExemplo06.querySelector("#idade");
const pSaída = document.querySelector("#saida");

//detectar o funcionamento do formulario : evento submit

formExemplo06.addEventListener("submit", function (event) {
    //anulando o comportamento padrao do formulario
    event.preventDefault();
    //capturando os dados  digitados 
    const nome = inputNome.value.trim(); //tirando espaço do começo e do fim
    const idade = Number(inputIdade.value); //garantimdo q a idade seja numero

    // console.log(nome, idade);

    //Validaçoes  dos campos 
    if (nome === "") {
        pSaída.textContent = "Por favor, preencha  o nome";
        pSaída.style.color = "red";
        return; //pare tudo (enquanto essa validaçao nao for atendida)
    }
    //se a idade nao e numero ou se é abaixo do zero  ou se e acima do 120 ou se e vazia 
    if (isNaN(idade) || idade < 0 || idade > 120 || idade == "") {
        pSaída.textContent = "Por favor, preencha idade entre 0 e 120"
        pSaída.style.color = " purple";
        return;

    }

    //Nenhuma das condiçoes anteriores deu true?entao significa q tudo deu certo 
    //portanto, avisamos  o usuario:
    pSaída.textContent= `Òlá ${nome}, voce tem ${idade} anos! Seus dados foram enviados!`;
    pSaída.style.color = "blue";

    formExemplo06.reset(); //reset (limpeza) dos campos
    inputNome.focus(); //devolvendo o cursor (foco ao primeiro)
})

//Exemplo 7
const inputSenha = document.querySelector("#senha");
const botaoMostrar = document.querySelector("#mostrar");

//ao pressionar botao
botaoMostrar.addEventListener ("pointerdown", function(){
  inputSenha.type = "text";
  botaoMostrar.textContent = "🙈 ocultar senha"
    
});

//ao solicitar   ou liberar o botao
botaoMostrar.addEventListener("pointerup", function(){
   inputSenha.type = "password";
   botaoMostrar.textContent = "👁️Mostrar senha"
    
})





