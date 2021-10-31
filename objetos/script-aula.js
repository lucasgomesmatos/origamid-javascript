var pessoa = {
  nome: 'Lucas',
  idade: 22
}

var quadrado = {
  lados: 4 ,
  area : function (lado) {
    return lado * 2
  },
  perimetro : function(lado) {
    return lado * this.lados  // this.lados acessa a variável do objeto
  }
}

console.log(quadrado.area(2))
console.log( quadrado.perimetro(2))


Math.PI; // 3.14
Math.random(); // número aleatório

var pi = Math.PI;
console.log(pi)

console.log(Math.floor(Math.random() * 10))


var height = 120;

var menu = {
  width : 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight() {
    return this.height / 2;
  }
}

menu.backgroundColor = '#000'
menu.color = '#fff'

var bg = menu.backgroundColor;

console.log(bg)
console.log(menu.hasOwnProperty('backgroundColor'))