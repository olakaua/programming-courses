/*
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar true
|| -> OR -> OU -> Apenas uma das expressões precisam ser verdadeiras para retornar true
! -> NOT -> NÃO -> Inverte o resultado da expressão
*/

const expressaoAnd = true && true && false && true;
const expressaoOr = true || false || true || true;
console.log(expressaoOr);


const usuario = 'Kauã'; // form usuário digitou
const senha = '123456'; // form usuário digitou

const vaiLogar = usuario === 'Kauã' && senha === '12345'
console.log(vaiLogar);

