/* 
 Aritméticos 
 + Adição | - Subtração | / Divisão | * Multiplicação
 ** Elevação | % Resto da Divisão 
*/

//Precedência
// () ** * / % + - 

//incremento
let contador = 1;
contador++; //O valor da variável mais 1
++contador;
console.log(contador)

//decremento
let contador1 = 1;
contador1--; //O valor da variável menos 1
--contador1;

//incremento para mais de 1
const passo = 50;
let contador2 = 0;
contador += passo; // contador = contador + 50

// Converter String para Number
const numero1 = 10;
const numero2 = parseInt('5'); // Inteiro
const numero3 = parseFloat('5'); // Real
const numero4 = Number('7') // Converte para number
console.log(numero1 + numero2)