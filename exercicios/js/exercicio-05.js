'use strict';

let valor = 400;
let desconto = 0;
let valorFinal = 0;
let economia = 0;


if (valor > 300) {
   desconto= 0.2 ;
   
}else if (valor > 100){
      desconto= 0.1;
} else {
    desconto=0;
}

valorFinal=valor-valor*desconto;
economia=valor-valorFinal

console.log(valor);
console.log(desconto);
console.log(valorFinal);
console.log(economia);



