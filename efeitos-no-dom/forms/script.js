const contato = document.querySelector('#contato');
const userEvent = ['keyup', 'change'];


function handleKeyUp(e) {
  const target = e.target;
  if(!target.checkValidity()) {
    console.log('oi')
    target.classList.add('invalido');
    target.nextElementSibling.innerText = target.validationMessage;
  }
}

userEvent.forEach(event => contato.addEventListener(event, handleKeyUp))