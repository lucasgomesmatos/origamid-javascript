// Crie uma função para verificar se um valor é Truthy

function isTruthy(dados) {
  return !!dados
}

console.log(isTruthy(1))

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(perimetro) {
  return perimetro * 4;
}

console.log(perimetroQuadrado(2))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}

console.log(nomeCompleto('Lucas', 'Gomes Matos'))

// Crie uma função que verifica se um número é par

function isEven(num) {
  if(num % 2 == 0) {
    return 'O número é par'
  } else {
    return 'O número é ímpar'
  }
}

console.log(isEven(22))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDado(dado) {
  return typeof dado;
}

console.log(tipoDado('Lucas'))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('scroll', function () {
  return console.log('Lucas Gomes Matos');
});



// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
