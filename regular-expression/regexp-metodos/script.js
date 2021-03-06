// const regexp = /\w+/gi;
// const regexp1 = new RegExp('\\w+', 'gi');

// const frase = "JavaScript Linguagem 1010";

// console.log(frase.replace(regexp, 'X'));
// console.log(frase.replace(regexp1, 'X'));

// const regexp = /Java/g;
// const frase = "JavaScript e Java Linguagem 1010";

// let i = 1;
// while(regexp.test(frase)){
//   console.log(i++, regexp.lastIndex);
// }

// const frase = 'JavaScript, TypeScript, CoffeeScript, Java';
// const regexp = /Script/g;

// let regexpResultado;

// while((regexpResultado = regexp.exec(frase)) !== null){
//   console.log(regexpResultado);
// }

const emails = `
joao@homail.com
marta@ggmail.com
bruna@oulook.com
lucas@likearocket.com`;


const regexp = /(\w+@)([\w.]+)/g;

const resultado = emails.replace(regexp, (...args) => {
  if(args[2] === 'homail.com') {
    return `${args[1]}hotmail.com`;
  } else if (args[2] === 'ggmail.com') {
    return `${args[1]}gmail.com`;
  } else if (args[2] === 'oulook.com') {
    return `${args[1]}outlook.com`;
  } else { 
    return args[0];
  }
});

console.log(resultado);