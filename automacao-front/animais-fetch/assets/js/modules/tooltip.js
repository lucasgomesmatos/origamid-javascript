export default function initTooltip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");
  let onMouseleave;
  let onMouseMove;

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;

    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  function onMouseOver() {
    const tooltipBox = criarTooltipBox(this);

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseleave.tooltipBox = tooltipBox;
    onMouseleave.element = this;
    this.addEventListener("mouseleave", onMouseleave);
  }

  if (tooltips) {
    onMouseleave = {
      handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener("mouseleave", onMouseleave);
        this.element.removeEventListener("mousemove", onMouseMove);
      },
    };

    onMouseMove = {
      handleEvent(event) {
        this.tooltipBox.style.top = `${event.pageY + 20}px`;
        this.tooltipBox.style.left = `${event.pageX + 20}px`;
      },
    };

    tooltips.forEach((item) => {
      item.addEventListener("mouseover", onMouseOver);
    });
  }
}
