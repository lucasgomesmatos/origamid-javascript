// Pega a lista completa das imagens
const tabMenu = document.querySelectorAll(".js-tabmenu li");

// Pega a lista completa das sections de animais
const tabContent = document.querySelectorAll(".js-tabconteudo section");

if (tabMenu.length && tabContent.length) {
  tabContent[0].classList.add("ativo"); // adiiona a classe ativo ao primeiro elemento

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo");
    });
    tabContent[index].classList.toggle("ativo");
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
      activeTab(index);
    });
  });
}
