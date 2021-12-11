// Variáveis

/**
 * Responsáveis por guarda dados na mémoria.
 * Inicia com a palavra var, let ou const
 */

var nome = "Lucas";
let idade = 22;
const possuiFaculdade = true;

//EVITAM REPETIÇÕES

/**
 * DRY (Don't repeat yourself)
 */

var preco = 20;
var totalComprado = 5;
var precoTotal = preco * totalComprado;

//SINTAXE

/**
 * Palavra chave var seguida do nome, sinal de igual e o valor.
 */

var nome = "André";
var idade2 = 28;
var possuiFaculdade2 = true;

//VÍRGULA

/**
 * Utilizei a vírgula para criar mais de uma variável, sem repetir a palavra chave var.
 */

var nome = "André",
  idade3 = 28,
  possuiFaculdade3 = true;

//SEM VALOR

var precoAplicativo;
// retorna undefined

/** Inválido
 *
 * var §nome;
 * var function;
 * var 1possuiFaculdade;
 */

/** Válido
 * var $selecionar;
 * var _nome;
 * var possuiFaculdadeNoExterior;
 */


//DECLARAR

/**
 * Erro ao tentar utilizar uma variável que não foi declarada.
 */

console.log(nome);
// retorna nome is not defined

// HOISTING

/**
 * São movidas para cima do código, porém o valor atribuído não é movido.
 */

 console.log(nome);
 var nome = 'André';
 // Retorna undefined
 
 var profissao = 'Designer';
 console.log(profissao);
 // Retornar Designer

 
//MUDAR O VALOR ATRIBUÍDO

/**
 * É possível mudar os valores atribuídos a variáveis declaradas com var e let. Porém não é possível modificar valores das declaradas com const
 */

 var idade4 = 28;
 idade = 29;
 
 let preco = 50;
 preco = 25;
 
 const possuiFaculdade4 = true;
 possuiFaculdade = false;
 // Retorna um erro
 