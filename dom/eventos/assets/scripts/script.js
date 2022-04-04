// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linkInternos = document.querySelectorAll('a[href^="#"]');

const handleClink = (e) => {
  e.preventDefault()
  linkInternos.forEach(link => {
    link.classList.remove('ativo')
  });
  e.target.classList.add('ativo');
}

linkInternos.forEach(link => {
  link.addEventListener('click', handleClink);
})


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

// const elements = document.querySelectorAll('body *')

// const handleElement = (e) => {
//   console.log(e.currentTarget)
// }

// elements.forEach((element) => {
//   element.addEventListener('click', handleElement);
// })


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// const handleRemove = (e) => {
//   e.currentTarget.remove()
// }

// elements.forEach((element) => {
//   element.addEventListener('click', handleRemove);
// })

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
const windowClickEnlarge = (e) => {
  if(e.key === 't') {
    document.documentElement.classList.toggle('textoMaior')
  }
}

window.addEventListener('keydown', windowClickEnlarge);