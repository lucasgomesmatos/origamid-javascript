// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}

const lucas = new Pessoa('Lucas', 'Gomes', 23);


// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

// console.log(Object.getOwnPropertyNames(NodeList.prototype));
// console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
// console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // undefined

console.log(li.constructor.name)


// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
