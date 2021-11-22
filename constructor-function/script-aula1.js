function Carro(marcaAtribuida, precoAtribuido) {
  this.marca = marcaAtribuida,
  this.preco = precoAtribuido;
  
}

const honda = new Carro('Honda', 3000);
console.log(honda);


function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca,
  this.preco = precoFinal;
  
}

const ferrari = new Carro2('Ferrari', 5000)