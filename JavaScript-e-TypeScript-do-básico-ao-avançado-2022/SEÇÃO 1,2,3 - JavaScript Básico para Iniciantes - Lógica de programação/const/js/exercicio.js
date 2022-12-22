/* Exercício fazer uma tabela de IMC 
Kauã Ribeiro tem 19 anos, pesa 84 kg
tem 1.80 de altura e seu IMC é de 25.489494
Kauã Ribeiro nasceu em 2003
*/

const nome = 'Kauã';
const sobrenome = 'Ribeiro';
const idade = 19;
const peso = 64;
const altura = 1.80;
let indiceDeMassaCorporal; // peso / (altura * altura)
let anoNascimento

indiceDeMassaCorporal = 64 / (1.80 * 1.80);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${altura} de altura e seu IMC é de ${indiceDeMassaCorporal}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`)
