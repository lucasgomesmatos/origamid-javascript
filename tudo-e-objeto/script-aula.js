var nome = 'Lucas';

nome.length; // 5
nome.charAt(1); // 'u'
nome.replace('c', 'k'); // 'Lukas'
nome; // 'Lucas'


var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'


function areaQuadrado(lado) {
  return lado * lado;
}

areaQuadrado.toString();
//"function areaQuadrado(lado) {
//  return lado * lado;
//}"

areaQuadrado.length; // 1


var btn = document.querySelector('.btn');

btn.classList.add('azul') // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function() {
  console.log('Clicou')
})
