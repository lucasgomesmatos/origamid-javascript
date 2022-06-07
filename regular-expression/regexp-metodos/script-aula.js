// Regexp Constructor
// Toda regexp é criada com o constructor RegExp() e herda as suas propriedades e métodos. Existem diferenças na sintaxe de uma Regexp criada diretamente em uma variável e de uma passada como argumento de RegExp.

const regexpMe = /\w+/gi;

// Se passarmos uma string, não precisamos dos //
// e devemos utilizar \\ para meta characters, pois é necessário
// escapar a \ especial. As Flags são o segundo argumento
const regexpObj1 = new RegExp('\\w+', 'gi');
const regexpObj2 = new RegExp(/\w+/, 'gi');

'JavaScript Linguagem 101'.replace(regexpObj1, 'X');
// X X X

// Exemplo complexo:
const regexpTELEFONE1 = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
const regexpTELEFONE2 = new RegExp('(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?\\d{4}', 'g');



// Propriedades
// Uma regexp possui propriedades com informações sobre as flags e o conteúdo da mesma.

const regexpMetodo = /\w+/gi;

regexpMetodo.flags; // 'gi'
regexpMetodo.global; // true
regexpMetodo.ignoreCase; // true
regexpMetodo.multiline; // false
regexpMetodo.source; // '\w+'



// regexp.test()

// O método test() verifica se existe ou não uma ocorrência da busca. Se existir ele retorna true. A próxima vez que chamarmos o mesmo, ele irá começar do index em que parou no último true.

const regexpTest = /Java/g;
const frase = 'JavaScript e Java';

regexpTest.lastIndex; // 0
regexpTest.test(frase); // true
regexpTest.lastIndex; // 4
regexpTest.test(frase); // true
regexpTest.lastIndex; // 17
regexpTest.test(frase); // false
regexpTest.lastIndex; // 0
regexpTest.test(frase); // true (Reinicia
regexpTest.lastIndex;  // 4


// test() em loop
// Podemos utilizar o while loop, para mostrar enquanto a condição for verdadeira. Assim retornamos a quantidade de match's.

const regexpTestLoop = /Script/g;
const frasetest = 'JavaScript, TypeScript e CoffeeScript';

let i = 1;
while(regexpTestLoop.test(frasetest)) {
  console.log(i++, regexpTestLoop.lastIndex);
}
// 1 10
// 2 22
// 3 37


// regexp.exec()
// O exec() diferente do test(), irá retornar uma Array com mais informações do que apenas um valor booleano.

const regexpExec = /\w{2,}/g;
const fraseExec = 'JavaScript, TypeScript e CoffeeScript';

regexpExec.exec(fraseExec);
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined] 
regexpExec.exec(fraseExec);
// ["TypeScript", index: 12, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined] 
regexpExec.exec(fraseExec);
// ["CoffeeScript", index: 25, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined] 
regexpExec.exec(fraseExec);
// null
regexpExec.exec(fraseExec); // Reinicia
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined] 


// Loop com exec()
// Podemos fazer um loop com exec e parar o mesmo no momento que encontre o null.

const regexpLoop = /\w{2,}/g;
const fraseExecLoop = 'JavaScript, TypeScript e CoffeeScript';
let regexpResult;

while((regexpResult = regexpLoop.exec(frase)) !== null) {
  console.log(regexpResult[0]);
}


// str.match()
// O match() é um método de strings que pode receber como argumento uma Regexp. Existe uma diferença de resultado quando utilizamos a flag g ou não.

const regexpMatch = /\w{2,}/g;
const regexpSemG = /\w{2,}/;
const fraseMatch = 'JavaScript, TypeScript e CoffeeScript';

fraseMatch.match (regexpMatch);
// ['JavaScript', 'TypeScript', 'CoffeeScript']

fraseMatch.match(regexpSemG);
// ["JavaScript", index: 0, input: "JavaScript,
// TypeScript e CoffeeScript", groups: undefined]


// str.split()
// O split serve para distribuirmos uma string em uma array, quebrando a string no argumento que for passado. Este método irá remover o match da array final.

const fraseSplit = 'JavaScript, TypeScript, CoffeeScript';

fraseSplit.split(', ');
// ["JavaScript", "TypeScript", "CoffeeScript"]
fraseSplit.split(/Script/g);
// ["Java", ", Type", ", Coffee", ""]

const tagsSplit = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

tagsSplit.split(/(?<=<\/?)\w+/g).join('div');
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div>


// str.replace()
// O método replace() é o mais interessante por permitir a utilização de funções de callback para cada match que ele der com a Regexp.

const tagsReplace = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

tagsReplace.replace(/(?<=<\/?)\w+/g, 'div');
// <div>
//   <div>Item 1</div>
//   <div>Item 2</div>
// <div>


// Captura
// É possível fazer uma referência ao grupo de captura dentro do argumento do replace. Então podemos utilizar $&, $1 e mais.

const tagsCaptura = `
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
`;

tagsCaptura.replace(/<li/g, '$& class="ativo"');
// <ul>
//   <li class="ativo">Item 1</li>
//   <li class="ativo">Item 2</li>
// </ul>


// Grupos de Captura
// É possível definirmos quantos grupos de captura quisermos.

const emails = `
empresa@email.com
contato@email.com
suporte@email.com
`;

emails.replace(/(\w+@)[\w.]+/g, '$1gmail.com');
// empresa@gmail.com
// contato@gmail.com
// suporte@gmail.com


// Callback
// Para substituições mais complexas, podemos utilizar um callback como segundo argumento do replace. O valor do return será o que irá substituir cada match.

const regexpCallback = /(\w+)(@[\w]+)/g;
const emailsCallback = `joao@homail.com.br
marta@ggmail.com.br
bruna@oulook.com.br`

emailsCallback.replace(regexpCallback, function(...args) {
  console.log(args);
  if(args[2] === '@homail') {
    return `${args[1]}@hotmail`;
  } else if(args[2] === '@ggmail') {
    return `${args[1]}@gmail`;
  } else if(args[2] === '@oulook') {
    return `${args[1]}@outlook`;
  } else {
    return 'x';
  }
});

// joao@hotmail.com.br
// marta@gmail.com.br
// bruna@outlook.com.br
