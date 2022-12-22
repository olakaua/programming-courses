// Criando objeto
const pessoa = {
    nome: 'Kauã',
    sobrenome: 'Ribeiro',
    idade: 25
};
//Retirar dados especifico
console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.idade)

// Função que cria os objetos
function criaPessoa (nome, sobrenome, idade) {
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

// Chamando a função
const pessoa1 = criaPessoa('Luiz', 'Otávio', 25);
const pessoa2 = criaPessoa('Kauã', 'Ribeiro', 19);

// Função dentro do objeto
const pessoa3 = {
    nome: 'Kauã',
    sobrenome: 'Ribeiro',
    idade: 25,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando oi... ${this.idade}`) // this para usar as variáveis da função 
    },

    incrementaIdade(){
        this.idade++;
    }
};

pessoa3.fala();
pessoa3.incrementaIdade();
pessoa3.fala()