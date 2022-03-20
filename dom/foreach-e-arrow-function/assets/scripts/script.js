// Mostre no console cada parágrafos do site
const paragrafos = document.querySelectorAll('p');

paragrafos.forEach((item) => console.log(item));

// Mostre o texto dos parágrafos no console
paragrafos.forEach((item) => console.log(item.innerText));

// Como corrigir os erros abaixo:
const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

imgs.forEach( (item, index) => {
  console.log(index++);
});



