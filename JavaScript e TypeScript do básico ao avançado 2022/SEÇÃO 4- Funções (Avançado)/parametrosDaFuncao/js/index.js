// function funcao() {
//     console.log(arguments[0]); // arguments armazena os parâmetros 
// }
// funcao('Valor', 1, 2, 3, 4);

function funcao(a, b, c, d) {
    console.log(a,b,c,d)
}
funcao(1, 2, 3);

function funcao1(a, b = 2) { // b = 2 atribui valor para o b quando não tiver um parâmetro para ele
    console.log(a + b);
}
funcao1(2);

// Função soma com rest operator (...)
function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '/') acumulador /= numero;
        if (operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('-', 0, 20, 30, 40, 50);