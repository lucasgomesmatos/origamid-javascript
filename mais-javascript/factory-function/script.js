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

function handleClick(event) {
  console.log("clicou");
  btns.addClass("active");
}

const btns = $$("button");

console.log(btns.hide().show());
console.log(btns.on("click", handleClick));
