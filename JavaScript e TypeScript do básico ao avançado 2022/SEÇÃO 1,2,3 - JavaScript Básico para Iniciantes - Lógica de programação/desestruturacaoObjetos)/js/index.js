// Criando Objeto
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};
// Pegar dados
// Atribuição via desestruturação
const { nome, sobrenome, idade } = pessoa; // Como o nome é igual ao que está na pessoa não precisa colocar pessoa.nome, tudo dentro do {vira uma variável}
console.log(nome, sobrenome, idade)

// Mudar variáveis
// const { nome2 = 'Não existe', sobrenome: teste = '', idade1 } = pessoa1; // Mudando nome da variável pela atribuição

const nome1 = pessoa.nome
console.log(nome);

// Pegar coisas de dentro do objeto
const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero)