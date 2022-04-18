// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
  nome: 'Nome pessoa',
  idade: 0,
  andar() {
    console.log(this.nome + ' andou');
  }
}

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
    console.log(this.nome + ' andou');
  }
}

const pessoa1 = new Pessoa('Lucas', 23);

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const pessoa2 = new Pessoa('João', 20);
const pessoa3 = new Pessoa('Maria', 25);
const pessoa4 = new Pessoa('Bruno', 15);


// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos


function Dom(seletor) {
  const elementsList = document.querySelectorAll(seletor);
  this.elements = elementsList;
  this.addClass = function(classe) {
    elementsList.forEach((element) => {
      element.classList.add(classe)
    })
  }
  this.removeClass = function(classe) {
    elementsList.forEach((element) => {
      element.classList.remove(classe)
    })
  }
}

const listaItens = new Dom('li');

console.log(listaItens.addClass('res'))