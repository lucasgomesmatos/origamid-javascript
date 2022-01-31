const pessoa = {
  nome: 'Lucas',
  idade: 23,
  profisao: 'Programador',
}

const quadrado= {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  }
}

console.log(quadrado.area(5))