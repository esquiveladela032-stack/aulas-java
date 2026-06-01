'use strict';


/* SOBRE UM SINAL DE IGUAL
Significa dar um valor(atribuir) a uma variavel/constante 
Quer fazer comparações de igualdade?
Pelo menos DOIS SINAIS  DE IGUAL ==
na duvida , use tres ===*/

    
let estoque = 10
//checando o valor do estoque esta zerado
if (estoque === 0) {
    console.log("Estoque critico");
} else if (estoque <= 10) {
    console.log("Estoque baixo");
} else { 
    console.log("Estoque normal"); 
}

/* Refatoração/refatora: implementar melhoria */

let resultados;

if (estoque == 0){
    resultado = "citica";
}else if(estoque <= 10){
    resultado = "baixo";
}else{
    resultado = "normal";
}
console.log("estoque esta em situação" +resultados);









