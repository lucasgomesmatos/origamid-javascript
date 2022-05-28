class Veiculo {
  constructor(rodas, combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }

  acelerar() {
    return `acelerando`;
  }
}

class Moto extends Veiculo {
  constructor(rodas, combustivel, capacete) {
    super(rodas, combustivel);
    this.capacete = capacete;
  }
  empinar() {
    return `Moto empinou com ${this.rodas} rodas`;
  }
}

const moto = new Moto(2, 'Gasolina', true);
console.log(moto);