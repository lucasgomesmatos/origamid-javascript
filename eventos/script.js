// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linksInternos = document.querySelectorAll('a[href^="#"');

function handleLink(event) {
  event.preventDefault();

  linksInternos.forEach((link)=>{
    link.classList.remove('ativo')
  });
  event.currentTarget.classList.toggle('ativo');
}

linksInternos.forEach((link)=>{
  link.addEventListener('click', handleLink);
});


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

/*
 const todosElementos = document.querySelectorAll('body *');

function handleItem(event){
  console.log(event.currentTarget)
}

todosElementos.forEach((elemento)=> {
  elemento.addEventListener('click', handleItem);
})

*/


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
/*
const todosElementos = document.querySelectorAll('body *');

function handleItem(event){
  event.currentTarget.remove();
}

todosElementos.forEach((elemento)=> {
  elemento.addEventListener('click', handleItem);
})
*/


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleZoom(event) {
  if(event.key === 't') {
    document.documentElement.classList.toggle('fonteMaior');
  }
}

window.addEventListener('keydown', handleZoom);