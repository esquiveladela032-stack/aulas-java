'use strict'
/* Operadores RELACIONAIS
==(IGUALDADE POR VALOR), ===(IGUALDADE POR VALOR E TIPO)
<(MENOR), >(MAIOR), <=(MENOR OU IGUAL), >=(MAIOR OU IGUAL)
!=(DIFERENÇA POR VALOR),!==(DIFERENÇA POR VALOR E TIPO)

*/

let a = 10;
let b = 10;
let c = 100;
  let d = "100";  //valor como string/texto 

 console.log(a > b);    // false(a nao e maior que b)
console.log(a >= b);    //true (a é igual a b )
console.log(c != a);    //true (c é diferente que a)

// Comparando apenas VALOR (usando ==)
console.log(c == d);  //true, pois VALORES  são os mesmos

// Comparando VALOR E TIPO DE DADOS (usando ===)
console.log(c === d);  //false pois TIPO DE DADO é diferente

//Condicional SIMPLES(if)
console.log("\nExemplo 1: SIMPLES(if)");

let numero = 30;
if (numero >= 20){
  console.log("se voce ver esta mensagem, é porque a condição é true (verdadeira");
  }

//Quando de trata de uma unica açao , podemos omitir  as chaves e dxar em uma linha
if(numero >= 20) console.log("uma unica açao!");

//Condicional COMPOSTA (if/else)
  console.log("\nExemplo 2 : COMPOSTA (if/else)");

  const aluno = "Marcelo"
  let idade = 45;
  
  if(idade >= 18){
    console.log(aluno+ "é maior de idade");
    
 } else {
  console.log(aluno + "é menor de idade");
  
 }
 //Lógica 2: condição menor que 18
 if (idade < 18){
  console.log(aluno + "é menor de idade");
  }else { console.log (aluno+ "é maior de idade");}

  /*Operador chamado de ternario ?:
  Versão curta do if/else (shorthand if/else)*/
  let situacao = idade >= 18 ? "maior" : "menor";

  console.log(`${aluno} é ${situacao} de idade.`);

  //Condicional ENCADEADA (if/else if/else)
  console.log("\nExemplo 3 : COMPOSTA (if/else if/else)");

  let media = 7;
  let resultados = media >= 7 ? "aprovado" : "reprovado";

  /* Determinar o desempenho do aluno de acordo com a media que teve 
  
  Desempenhos possiveis:
  -media acima de 9? otimo
  -media acima de 7?  bom
  -media acima de 5?  ruim
  -media ate 5 ? péssimo
  */ 

  if(media > 9){
    console.log("OTIMO 😍");
   } else if (media > 7){console.log("BOM😊");
  } else if (media > 5){console.log("RUIM☹️");
  } else { //Aqui, basta o else (sem if, sem condição)pois e o que restou
    console.log("PESSIMO😢");
  }


  

  












