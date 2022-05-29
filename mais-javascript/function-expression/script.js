// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');

// Crie uma IIFE e isole o escopo
// de qualquer código JS.
x = 30;

((x, y)=> {
  console.log(x + y);
})(10, 20);

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();

// ativar o parâmetro que foi chamado
