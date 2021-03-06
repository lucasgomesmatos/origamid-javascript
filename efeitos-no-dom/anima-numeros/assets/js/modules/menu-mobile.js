import outsideClick from "./outside-click.js";

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const userEvent = ["click", "touchstart"];

  if (menuButton && menuList) {
    function openMenu(event) {
      menuList.classList.add("active");
      menuButton.classList.add("active");
      outsideClick(menuList, userEvent, () => {
        menuList.classList.remove("active");
        menuButton.classList.remove("active");
      });
    }

    userEvent.forEach((event) => menuButton.addEventListener(event, openMenu));
  }
}
