let accordions = document.querySelectorAll("button.accordion");
let imgDeg = document.querySelector(".img-accordion-plus");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function () {
    this.classList.toggle("active");
    if (imgDeg.style.transform && imgDeg.style.transform === "rotate(-60deg)") {
      imgDeg.style.transform = "";
    } else {
      imgDeg.style.transform = "rotate(-60deg)";
    }
    this.nextElementSibling.classList.toggle("show");
  };
}

//
const items = document.querySelectorAll(
  ".wave-spoiler-block-accordion button"
);

function toggleAccordion() {
  const itemToggle = this.getAttribute("aria-expanded");

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute("aria-expanded", "false");
  }

  if (itemToggle == "false") {
    this.setAttribute("aria-expanded", "true");
  }
}

items.forEach((item) => item.addEventListener("click", toggleAccordion));