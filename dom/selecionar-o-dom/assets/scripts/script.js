// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imgImagens = document.querySelectorAll("[src^='./assets/img/imagem']");
console.log(imgImagens)

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll("[href^='#']");
console.log(linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector('.animais-descricao h2');
console.log(primeiroh2)

// Selecione o último p do site
const ultimoParagrafo = document.querySelectorAll('p:last-child');
console.log(ultimoParagrafo[ultimoParagrafo.length - 1])

