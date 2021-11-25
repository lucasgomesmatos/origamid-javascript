// const dom = {
//   seletor: 'li',
//   elemento() {
//     return document.querySelector(this.seletor);
//   },
//   ativar() {
//     this.elemento().classList.add('ativar')
//   }
// }

// dom.ativar();

// dom.seletor = 'ul'
// dom.ativar();

function Dom(seletor) {
  this.element = function() {
    return document.querySelector(seletor);
  }
  this.ativar = function(classe) {
    this.element().classList.add(classe);
  }
}

const li = new Dom('li');
const ul = new Dom('ul');
const lastLi = new Dom('li:last-child');
lastLi.ativar('ativar')


