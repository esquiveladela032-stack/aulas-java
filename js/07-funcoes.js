"use strict";

// 1) Função Anônima: criada/associada a uma constante
const exemplo1 = function () {
    console.log("Olá! Esta é uma função anônima.");
};

// Chamar/Invocar função
exemplo1();

/* Atenção:
Nessa sintaxe (função anônima), você deve PRIMEIRO
declarar a função para só depois chamá-la.
*/


// 2) Função nomeada/declarada: criada de forma livre
function exemplo2() {
    console.log("Oi! Esta é uma função declarada/nomeada.");
}

exemplo2(); // Chamando depois (funciona!)


// 3) Arrow Function (função flecha/seta):
// cria/associa a uma constante
const exemplo3 = () => {
    console.log("E aqui temos uma Arrow Function!");
};

exemplo3(); // Atenção: só pode chamar DEPOIS de declarar.

/* Funções com parâmetros (ou argumentos)
Usamos parâmetros quando é necessário que a função
receba algum dado de entrada para realizar processamentos.

Exemplo: uma função que calcula frete precisaria
receber dados como CEP de entrega, peso dos produtos etc.
*/

console.log("\nFunções com parâmetros/argumentos:");

function darUmaSaudacao(nome = "Visitante") {
    console.log("Bem-vindo(a) " + nome);
}

// Chamando a função e passando valores diferentes
darUmaSaudacao("Marcelo");
darUmaSaudacao("Gabriel");
darUmaSaudacao("Pérola");
darUmaSaudacao(); // Usa o valor padrão "Visitante"

/* Funções com parâmetros e RETORNO de resultado */

function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

console.log("Resultado 1: " + multiplicar(10, 5));

let resultado2 = multiplicar(100, 50);

console.log("Resultado 2: " + resultado2);

/* Formatar valores monetários */

let preco = 5000;
let desconto = preco * 0.1; // 10%
let precoFinal = preco - desconto;

function formatarMoeda(valor, digitos = 2) {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: digitos
    }).format(valor);
}

console.log("Preço inicial: " + formatarMoeda(preco));
console.log("Desconto: " + formatarMoeda(desconto));
console.log("Preço final: " + formatarMoeda(precoFinal));

console.log("\n\n");

// Versão 1: sintaxe normal (declarada/nomeada)
/*
function calcularDobro(valor) {
    return valor * 2;
}
*/

// Versão 2: sintaxe ARROW FUNCTION
// const calcularDobro = (valor) => {
//     return valor * 2;
// };

// Versão 3:  sintaxe ARROW FUNCTION  com retorno implícito
/* Nesta versão ,  podemos omitir os parenteses (pos  há somente UM parametro ) e as chaves e return (pois há somente uma unica ação sendo feita)*/
 const calcularDobro = valor => valor * 2;

// Chamada da função (obs: sempre APOS  declarar o ARROW  function)
console.log(calcularDobro(10));

/* Função callback (função como parametro  de outra função ) */
const numeros = [10,20,5,123];

//Versao 1: usando função callback nomeada/declarada 
/* const numerosMultiplicados = numeros.map( function(numero) {
    return numero *3;
}); */


//Versão 2:usando função call back  arrow function
const numerosMultiplicados = numeros.map ( numeros => numeros * 3);

console.log(numeros);
console.log(numerosMultiplicados);


