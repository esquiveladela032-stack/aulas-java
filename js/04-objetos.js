'use strict';

// Exemplo 1: objeto com dados de uma pessoa
console.log("Exemplo 1:");
const pessoa = {
    // propriedade: valor
    nome: "Chapolin Colorado",
    idade: 25,
    cidade: "São Paulo",
    estado: "SP",
    "Empresa que Trabalha": "Senac" // atenção neste caso
};

// Acesso direto (pra programador)
console.log(pessoa);

// Acesso a cada propriedade (sintaxe usando .)
console.log(pessoa.nome); 
console.log(pessoa.idade +" anos");

console.log(pessoa["nome"]); // usando [] menos comum
console.log(pessoa["Empresa que Trabalha"]); // [] obrigatório

console.log("\n---"); // gambiarra pra pular linha

// Exemplo 2: objeto COM array
console.log("\nExemplo 2:");
let empresa = "Senac"
const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    volumes: [
        "A Sociedade do Anel",
        "As Duas Torres",
        "O Retorno do Rei"
    ]
};

console.log(livro);

console.log(`${livro.titulo} é famoso`);
console.log(`${livro.volumes[0]} é o primeiro livro`);

// Exemplo 3:  array de objetos
console.log("\nExemplo 3:");


const livros = [
    {
        titulo: "O Homem de Giz",
        ano: 2011
    },
    {
        titulo: "O Pequeno Principe",
        ano:1947
    },
    {
        titulo: "Duna",
        ano:1965
    }
];

console.log(livros);

console.log(livros[1].titulo);

console.log(`Os livros ${livros[0].titulo} e ${livros[2].titulo} são titulos famosos da literatura. Retrospectivamente, foram lançados em ${livros[0].ano} e ${livros[2].ano}.`);


// com concatação.... boa sorte com aspas !
// console.log( `os "livros"  `+livros[0].titulo+` " e `+livros[2].titulo`]);












