const menu = document.querySelectorAll(".menu a");
const menuBurguer = document.querySelector(".menuburguer");
const nav = document.querySelector(".menu nav");
menuBurguer.addEventListener("click", () => {
  nav.classList.toggle("active");
});

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
sectionContato[0].classList.add("active");
sectionContato[0].children[0].classList.add("active");
sectionContato[0].children[1].children[0].children[0].classList.add("active");
const namesAnimals = ["jack", "tom", "blue", "bidu", "huhu", "patu"];

function scrollBox() {
  sectionContato.forEach((item, id) => {
    const top = item.getBoundingClientRect().top - metade < 0;
    // item.children[0].innerHTML = namesAnimals[id];
    if (top) {
      const count = [1000, 1200, 1400, 1600, 1800, 2000];
      for (let i = 0; i < sectionContato.length; i++) {
        setTimeout(() => {
          // h1
          sectionContato[i].classList.add("active");
          console.log(namesAnimals[i]);
          // img
          item.children[0].classList.add("active");
          sectionContato[i].children[1].children[0].children[0].classList.add(
            "active"
          );
        }, count[i]);
      }
    }
  });
}
const mt = window.innerHeight * 0.6;

const boxAll = document.querySelectorAll(".box-home");

const m = window.innerHeight * 0.6;

function showBoxH1() {
  // boxAll.forEach((item) => {
  //   item.children[0].classList.remove("active");
  // });
  boxAll.forEach((item) => {
    const top = item.children[0].getBoundingClientRect().top - m;
    item.children[0].classList.add("active");
  });
}

window.addEventListener("scroll", () => {
  scrollBox();
  showBoxH1();
  const scr = document.querySelector(".js-scroll");
  const tops = scr.getBoundingClientRect().top - mt < 0;
  let count = [900, 1100, 1400, 1600];
  if (tops) {
    for (let i = 0; i < boxs.length; i++) {
      setTimeout(() => {
        // box ola
        console.log(boxs[i].classList.add("active"));
      }, count[i]);
    }
  }
});
const menulink = document.querySelectorAll(".menu a[href^='#']");
menulink.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const href = item.getAttribute("href");
    const section = document.querySelector(href);
    const sectionTop = section.getBoundingClientRect().top;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    console.log(href);
  });
});
const boxContainer = document.querySelector(".section-home-container");
const boxs = document.querySelectorAll(".box-home");

function boxActive() {
  boxs.forEach((item) => {
    item.classList.remove(".active");
  });
}
function addShow() {
  const metades = window.innerHeight * 0.6;
  const boxTop = boxContainer.getBoundingClientRect().top - metades;
  console.log(boxTop);
  if (boxTop) {
  }
}

window.addEventListener("scroll", () => {
  boxActive();
});
