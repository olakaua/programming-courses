/*
Entre 0 - 11 -> Bom dia
Entre 12 - 17 -> Boa tarde
Entre 18 - 23 -> Boa noite
*/

// If pode ser usado sozinha
// Sempre que for usar um else tem que ter um if antes
// Pode ter vários else if na checagem
// Só pode ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else

const hora = 10;

// if -> se caso aconteça algo faca isso
if (hora >= 0 && hora <= 11) { 
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17) { // senão -> caso não aconteça o if
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23){
    console.log('Boa noite!');
} else { // então -> caso não aconteça nenhuma das outras opções
    console.log('Olá');
}