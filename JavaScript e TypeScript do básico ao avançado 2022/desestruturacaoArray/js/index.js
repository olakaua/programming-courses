//               0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [primeiroNumero, segundoNumero, ...resto] = numeros // ...resto atribui uma variável para pegar o restante sozinho
console.log(primeiroNumero, segundoNumero);
console.log(resto)

// Dentro do Array

//                   0          1          2
//                0  1  2    0  1  2    0  1  2
const numero = [ [1, 2, 3], [4, 5, 6], [7,8 ,9] ]
// console.log(numeros[1][2]); // Pega o 2 que ta no 1
const [,[,,seis]] = numeros; // , pula o índice
console.log(seis);