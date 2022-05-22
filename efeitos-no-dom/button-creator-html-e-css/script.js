const controles = document.querySelector("#controles");
const cssText = document.querySelector(".css");
const btn = document.querySelector(".btn");

controles.addEventListener("change", handleChange);

const handleStyle = {
  element: btn,
  texto(value) {
    this.element.innerText = value;
  },
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },
  width(value) {
    this.element.style.width = value + "px";
  },
  color(value) {
    this.element.style.color = value;
  },
  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },
  fontFamily(value) {
    this.element.style.fontFamily = value;
  },
  fontSize(value) {
    this.element.style.fontSize = value + "px";
  },
  border(value) {
    this.element.style.border = value;
  },
};

function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  handleStyle[name](value);
  saveValues(name, value);
  showCss();
}

function saveValues(name, value) {
  localStorage[name] = value;
}

function setValues() {
  const properties = Object.keys(localStorage);
  properties.forEach(pros => {
    handleStyle[pros](localStorage[pros]);
    controles.elements[pros].value = localStorage[pros];
  });
  showCss();
}

setValues();

function showCss() {
  cssText.innerHTML = `<span>${btn.style.cssText
    .split("; ")
    .join(";<span></span>")}`;
}
