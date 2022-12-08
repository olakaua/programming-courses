// Pegar dia da semana pela data

// const data = new Date("2003-11-26 00:00:00");
// let diaSemana = data.getDay();
// let diaSemanaTexto;

// switch (diaSemana) {
//   case 0:
//     diaSemanaTexto = "Domingo";
//     break;
//   case 1:
//     diaSemanaTexto = "Segunda";
//     break;
//   case 2:
//     diaSemanaTexto = "Terça";
//     break;
//   case 3:
//     diaSemanaTexto = "Quarta";
//     break;
//   case 4:
//     diaSemanaTexto = "Quinta";
//     break;
//   case 5:
//     diaSemanaTexto = "Sexta";
//     break;
//   case 6:
//     diaSemanaTexto = "Sábado";
//     break;
//     diaSemanaTexto = "";
// }

// console.log(diaSemanaTexto);

// Fazendo isso na função
function getDiaSemanaTexto(diaSemana) {
  let diaSemanaTexto;

  switch (diaSemana) {
    case 0:
      diaSemanaTexto = "Domingo";
      break;
    case 1:
      diaSemanaTexto = "Segunda";
      break;
    case 2:
      diaSemanaTexto = "Terça";
      break;
    case 3:
      diaSemanaTexto = "Quarta";
      break;
    case 4:
      diaSemanaTexto = "Quinta";
      break;
    case 5:
      diaSemanaTexto = "Sexta";
      break;
    case 6:
      diaSemanaTexto = "Sábado";
      break;
      diaSemanaTexto = "";
  }
  return diaSemanaTexto;
}

const data = new Date("2003-11-26 00:00:00");
let diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana);
console.log(diaSemana, diaSemanaTexto);