'use strict';
console.log("Exemplo 1: while (enquanto):");
/* Logica:enquanto uma condição for VERDADEIRA, faça/execute  açoes/processos. */

//Variavel de controle de repetição (contadora)
let contador = 1;
while(contador <= 5){
    console.log("valor da variavel:"+contador);

    //Atualiza o valor variavel de controle(incrementa)
    //contador = contador + 1;
    contador++;
    }

    console.log("\nExemplo 2: for (para):");
/* Logica: execute uma serie de ações a partir de um valor inicial até um valor final. */
for(let i = 1; i <= 10; i++){
    console.log("I vale:"+ i);
    }

      console.log("\nExemplo 3: loop para acessar ARRAY:");
/* Logica: execute ações enquanto  existir dados do array. */

const bandas = ["Slayer", "Nightwish","Rush","Metallica","Testamente","Iced Earth","Scorpions","Kiss"];

/* Começamos em ZERO obrigatoriamente, e a condição de repetiçãoé enquanto o "i" for menor que a quantidade de elementos array

Propriedade length:comprimenti/tamanho/quantidade de elementos*/
//Boa pratica guardar o tamanho do array ANTES  de iniciar o loop
let tamanho = bandas.length;  //cache (memoria)
for( let i = 0; i < tamanho; i++){
    console.log(bandas [i]);
    }

    console.log("\nExemplo 4 for/of: loop especifico para ARRAY:");
    const alunos = ["Marcelo","Alexandre","Emillye","Yuri","Raquel"];
 
    /* Logica: acessando cada aluno a partir  do array alunos */
    for (const aluno of alunos)
        {console.log(aluno);
    }

     console.log("\nExemplo 5 for/in: loop especifico para OBJETO:");
     const pessoa = {
        nome: "Seu Madruga",
        idade: 66,
        cidade: "São Paulo"
     };
     /* Lógica: acessando as propriedades do objeto pessoa */
     for(const propriedade in pessoa){
      //  console.log(propriedade); //traz apenas o nome da prop.
      //console.log(pessoa[propriedade]);  traz os valores

      console.log(propriedade+ ": "+pessoa[propriedade]);
      
      }

    

    



