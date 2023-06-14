const btnPost = document.querySelector(".section-postar a");
const inputsValue = document.querySelector(".section-postar input");
const sectionContainer = document.querySelector(".post-container");
const date = new Date();
const hours = [date.getHours(), date.getMinutes()];
const com = inputsValue.value;
function posts() {
  const div = document.createElement("div");
  const span = document.createElement("span");
  const comments = document.createElement("p");
  div.setAttribute("class", "new-post");
  div.appendChild(span);
  span.innerHTML = `${hours[0]}:${hours[1]}`;
  comments.innerHTML = inputsValue.value;
  div.appendChild(comments);
  sectionContainer.appendChild(div);
}
let btnsActive = false;
inputsValue.addEventListener("keyup", () => {
  if (inputsValue.value.length > -0) {
    btnsActive = true;
    btnPost.classList.add("active");
  } else {
    btnsActive = false;
    btnPost.classList.remove("active");
  }
});
btnPost.addEventListener("click", (e) => {
  e.preventDefault();
  if (btnsActive) {
    posts();
    inputsValue.value = "";
    btnsActive = false;
    btnPost.classList.remove("active");
  } else {
    alert("escreva algo");
  }
});
