// Criação de Array
//Indexador por  0       1        2
const alunos = ['Kauã', 'Julia', 'Maria'];

// Editar valores
alunos[0] = 'Eduardo'

// Adicionar elemento
alunos[3] = 'Kauã' // Adicionar no valor que não tem[3]
alunos[alunos.length] = 'Luisa'
alunos.push('Gui'); // Adiciona no final da Array
alunos.unshift('Gaby') // Adiciona no começo da Array

// Remover elementos
alunos.pop(); // Remove o último elemento
alunos.shift(); // Remove o primeiro elemento

// Saber tamanho da array
console.log(alunos.length);


console.log(alunos);
console.log(alunos[0]);
console.log(alunos[2]);