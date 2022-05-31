function $$(selectElements) {
  const elements = document.querySelectorAll(selectElements);

  function hide() {
    elements.forEach((element) => {
      element.style.display = "none";
    });
    return $$(selectElements);
  }

  function show() {
    elements.forEach((element) => {
      element.style.display = "initial";
    });
    return $$(selectElements);
  }

  function on(onEvent, callback) {
    elements.forEach((element) => {
      element.addEventListener(onEvent, callback);
    });
    return $$(selectElements);
  }

  function addClass(className) {
    elements.forEach((element) => {
      element.classList.add(className);
    });
    return $$(selectElements);
  }

  function removeClass(className) {
    elements.forEach((element) => {
      element.classList.remove(className);
    });
    return $$(selectElements);
  }

  return {
    elements,
    hide,
    show,
    on,
    addClass,
  };
}


const btns = $$("button");
btns.addClass("active");

// CLOSURES NA REAL
// Todas as funções internas da Factory Function possuem uma closure de $$. As mesmas contém uma referência à variável elements declarada dentro do escopo da função
