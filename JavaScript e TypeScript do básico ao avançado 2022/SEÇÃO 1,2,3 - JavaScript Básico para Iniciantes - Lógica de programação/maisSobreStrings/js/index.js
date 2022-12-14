let umaString = "Um texto";

//Pega uma letra da string
console.log(umaString[0,1]);

//adiciona palavras a string
console.log(`${umaString} em um belo dia`)

//para ver o índice
console.log(umaString.indexOf('texto que quer ver'))

//para ver índice de trás para frente
console.log(umaString.lastIndexOf(3))

//mudar palavras 
console.log(umaString.replace('Um', 'Outra'))

//tamanho da string
console.log(umaString.length)

//escolhe de onde quer começar a pegar
console.log(umaString.slice(2, 6))

//dividir string baseado em um caractere qualquer
console.log(umaString.split(' '))