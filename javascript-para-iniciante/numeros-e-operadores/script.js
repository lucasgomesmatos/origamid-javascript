// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;

// O resultado é 35

console.log(total)

// Crie duas expressões que retornem NaN

var nome = 'Lucas';
var idade = 22;


var peso = 80;
var unidade = 'kg'
var totalPeso = peso + unidade;

console.log(nome / idade)
console.log(totalPeso - 2)

// Somar a string '200' com o número 50 e retornar 250

var numero = '200';
var numero2 = 50;
var resultado = +numero + numero2;
console.log(resultado);

// Incremente o número 5 e retorne o seu valor incrementado

var numeroCinco = 5;
++numeroCinco;

console.log(numeroCinco)

// Como dividir o peso por 2?
var numero = '80';
var unidade = 'kg';
var pesoPorDois = +numero / 2; // NaN (Not a Number)
var peso = pesoPorDois + unidade; // '80kg'

console.log(peso)
