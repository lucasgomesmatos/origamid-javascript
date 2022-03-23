// Verifique a distância da primeira imagem
// em relação ao topo da página

const primeiraImg = document.querySelector('img');

console.log(primeiraImg.offsetTop)

// Retorne a soma da largura de todas as imagens



const somaImagens = () => {
  const imgs = document.querySelectorAll('img');
  let soma = 0;
  imgs.forEach((imagem) => {
    soma += imagem.offsetWidth
  });
  console.log(soma)
}

window.onload = function() {
  somaImagens();
}



// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkwidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkwidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui boa acessibilidade');
  }else {
    console.log(link, 'Não possui uma boa acessibilidade');
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const small = window.matchMedia('(max-width: 720px)').matches;

if(small) {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('menu-mobile')
}