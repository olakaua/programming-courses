function meuEscopo() {
  const form = document.querySelector(".form"); // Seleciona a classe do HTML
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault(); // Remove os eventos padrões do navegador

    const nome = form.querySelector(".nome"); // Pega os inputs
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value
    });

    console.log(pessoas);

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
  }
  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();