function areaQuadrado(lado) {
  return lado * lado;
}
console.log(areaQuadrado(5));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8));

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}
corFavorita();

addEventListener("click", () => console.log("Clicou"));

function imc2(peso, altura) {
  var imc = peso / (altura * altura);
  console.log(imc);
}

imc2(20, 1.8);

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Por favor preencha um número";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

console.log(terceiraIdade(60));


function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
}
//console.log(totalPaises); // erro, totalPaises não definido


var profissao = 'Programador';

function dados() {
  var nome = 'Lucas';
  var idade = 22;
  function outrosDados() {
    var endereco = 'Novo Oriente de Minas';
    var idade = 23;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'Lucas, 23, Novo Oriente de Minas, programador'
//outrosDados(); // retorna um erro


