import ValidarCpf from "./modules/validar-cpf.js";

const cpf = document.querySelector('#cpf');
const validarCpf = new ValidarCpf(cpf).init();

console.log(validarCpf.construir('12345678900'));