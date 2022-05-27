// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function() {
//   const buttonElement =  document.createElement('button');
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// }

// const button = new Button('Olá mundo', '#000');
// console.log(button.element())

// document.body.innerHTML = button.element()

class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }

  createElement() {
    const element = document.createElement("button");
    element.style.background = this.background;
    element.style.color = this.color;
    element.innerText = this.text;

    return element;
  }

  appendTo(target) {
    const element = document.querySelector(target);
    element.appendChild(this.createElement());
    console.log(element);
  }
}

const button = new Button("comprar", "#2d2d2d", "#fff");

button.appendTo('body')
