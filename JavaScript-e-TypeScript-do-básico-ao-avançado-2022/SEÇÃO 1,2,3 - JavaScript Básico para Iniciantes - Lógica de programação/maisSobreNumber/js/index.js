// Converter número para string
let num1 = 10;
let num2 = 2.5;

console.log(num1.toString() + num2); //Não altera na variável só no console
num1 = num1.toString() //Altera o valor da variável

//Pegar números binários dos números
console.log(num1.toString(2));

//Remover casas decimais
console.log(num1.toFixed(2));

// Saber se número é inteiro
console.log(Number.inInteger(num1));

// Saber se número é invalido
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp));

num1 += num2; // num1 = num1 + num2

// Arredonda o valor
num1 = parseFloat(num1.toFixed(2));