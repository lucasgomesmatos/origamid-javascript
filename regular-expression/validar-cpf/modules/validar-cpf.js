export default class ValidarCpf {
  constructor(element) {
    this.element = element;
  }

  limpar(cpf) {
    return cpf.replace(/\D/g, "");
  }
  construir(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }
  formatar(cpf) {
    const cpfLimpo = this.limpar(cpf);
    return this.construir(cpfLimpo);
  }

  validar(cpf) {
    const matchCpf = cpf.match(/^(?:\d{3}[-.\s]?){3}\d{2}/);
    return matchCpf && matchCpf[0] === cpf;
  }

  validarNaMundanca(cpfElement) {
    if (this.validar(cpfElement.value)) {
      cpfElement.value = this.formatar(cpfElement.value);
      cpfElement.classList.add("valido");
      cpfElement.classList.remove("erro");
      cpfElement.nextSibling.classList.remove("ativar");
      this.adicionarErroSpan();
    } else {
      cpfElement.classList.add("erro");
      cpfElement.classList.remove("valido");
      cpfElement.nextSibling.classList.add("ativar");
    }
  }

  adicionarEvento() {
    this.element.addEventListener("change", () => {
      this.validarNaMundanca(this.element);
    });
  }

  adicionarErroSpan() {
    const erroElement = document.createElement("span");
    erroElement.classList.add("erro-text");
    erroElement.innerText = "CPF inválido";
    this.element.parentNode.insertBefore(erroElement, this.element.nextSibling);
  }

  init() {
    this.adicionarEvento();
    this.adicionarErroSpan();
    return this;
  }
}
