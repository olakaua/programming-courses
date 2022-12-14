// Cria a data
const data = new Date(2021, 3, 20, 10, 11 , 45, 500 ); // a, m, d, h, m, s, ms
const date = new Date('2019-04-20 20:20:59');
console.log(data.toString()); // Para não ver em milésimos de segundos
console.log(date.toString());

// Para retirar dados
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sábado