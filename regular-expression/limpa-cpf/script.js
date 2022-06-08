const cpfsList = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => elements.map(element => element.innerText);
const limparCPF = (cpf) => cpf.replace(/\D/g, '');
const construirCPF = (cpf) => cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
const formatarCPFS = (cpfs) =>  cpfs.map(limparCPF).map(construirCPF);

const substituirCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPFS(cpfs);
  cpfsElements.forEach((cpf, index) => cpf.innerText = cpfsFormatados[index]);
}

substituirCPFS(cpfsList);


