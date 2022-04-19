function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function() {
  return `${this.nome} andou pela rua`
}

const lucas = new Pessoa('Lucas', 23);

console.log(Pessoa.prototype)
console.log(lucas.andar())