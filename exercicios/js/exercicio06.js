"use strict";

// A propriedade "nome" com os nomes dos clientes: "Dio", "Ozzy" e "Ian".
const clientes = [
    {
        identificador: 1,
        nome: "Dio"
    },
    {
        identificador: 2,
        nome: "Ozzy"
    },
    {
        identificador: 3,
        nome: "Ian"
    },
];

// Loop mostrando os dados de cada cliente
for (const cliente of clientes) {
    console.log(`- cliente: ${cliente.nome}, id: ${cliente.identificador}`);
}

