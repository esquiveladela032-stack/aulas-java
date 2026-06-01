'use strict';

const aluno = {
    nome: "Andre da Silva",
    dataDeNascimento: "20/09/2004",
    listaDeTelefones: [
        "673828927",
        "11987654902"
    ],
    endereco: {
        rua: "das promesas",
        numero: 200,
        bairro: "vila medeiros",
    }
}
console.log(`${aluno.nome}, ${aluno.listaDeTelefones[1]}, ${aluno.endereco.bairro},`);


