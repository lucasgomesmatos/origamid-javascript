// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const form = document.querySelector("#buscaCep");
const resultado = document.querySelector(".resultadoCep");

function handleKeyUp(event) {
  event.preventDefault();
  const cep = document.querySelector("#cep").value;
  if(cep && cep.length === 8 ) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      return response.text();
    })
    .then((response) => {
      resultado.innerHTML = response
      console.log(response);
    });
  }
}

form.addEventListener("submit", handleKeyUp);

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const bitcoin = setInterval(() => {
  fetch(`https://blockchain.info/ticker`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const bit = document.querySelector(".precoBTC");
      bit.innerHTML = `R$ ${response.BRL.buy}`.replace('.', ',');
    });
}, 30000);

// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const randomBtn = document.querySelector(".randomBtn");


function randomPiada() {
  fetch(`https://api.chucknorris.io/jokes/random`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      const piada = document.querySelector(".randomPida");
      piada.innerText = response.value
    });
}



randomBtn.addEventListener('click', randomPiada)