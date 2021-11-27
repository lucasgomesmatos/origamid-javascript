function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.abracar = function() {
    return 'Abraçou';
  }
  this.andar = function() {
    return 'Andou pelo objeto';
  }
}

Pessoa.prototype.andar = function() {
  return this.nome + ' Pessoa andou';
}

Pessoa.prototype.nadar = function() {
  return this.nome + ' Pessoa nadou';
}

const lucas = new Pessoa('Lucas', 22)

console.log(Pessoa.prototype);