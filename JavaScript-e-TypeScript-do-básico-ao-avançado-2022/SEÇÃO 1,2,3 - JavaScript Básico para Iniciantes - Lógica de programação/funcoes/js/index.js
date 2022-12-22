// Criando funções

function saldacao(nome) {
    console.log(`Bom dia ${nome}!`)
}
// chamando função para ser executada
saldacao('Luiz')

// Função de soma entre 2 valores

function soma(x, y) {
    const resultado = x + y;
    return resultado;
}

console.log(soma(2,3));

// Função anônima

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));

// Arrow Function
// Modos de fazer o Arrow Function
const raiz1 = (n) => { // Modo normal
    return n ** 0.5
}
console.log(raiz1(9));

const raiz2 = (n) => n ** 0.5 // De uma linha
console.log(raiz2(16));

const raiz3 = n => n ** 0.5 // De um parâmetro
console.log(raiz3(10))