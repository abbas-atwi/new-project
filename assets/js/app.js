const menu = document.querySelectorAll(".menu a");
menu[0].classList.add("active");
function menuAnimation(e) {
  e.preventDefault();
  menu.forEach((item) => {
    item.classList.remove("active");
  });
  this.classList.add("active");
}
menu.forEach((item) => {
  item.addEventListener("click", menuAnimation);
});

const pointers = document.querySelectorAll(".area-pointers .pointer");
const section = document.querySelectorAll(".section-show");
const sliders = document.querySelector(".sliders");
const sec = section[0].innerHTML;
pointers[0].classList.add("active");
const slider = ["0", "100", "200"];
function showSlide(id) {
  section.forEach((item) => {
    item.classList.remove("active");
  });
  section[id].classList.add("active");
  const verfy = section[id] === section[0] ? "" : "-";
  sliders.style.marginLeft = `${verfy}${slider[id]}vw`;
  console.log(verfy);
}

function activePointer(id) {
  pointers.forEach((item) => {
    item.classList.remove("active");
  });
  pointers[id].classList.add("active");
  showSlide(id);
}

pointers.forEach((item, id) => {
  item.addEventListener("click", () => {
    activePointer(id);
  });
});

const sectionContato = document.querySelectorAll(".section-box");
const metade = window.innerHeight * 0.6;
function scrollBox() {
  sectionContato.forEach((item) => {
    const top = item.getBoundingClientRect().top - metade < 0;
    if (top) {
      item.children[0].classList.add("active");

      console.log(
        item.children[1].children[0].children[0].classList.add("active")
      );
    }
  });
}

window.addEventListener("scroll", () => {
  scrollBox();
});
console.log(sectionContato);
