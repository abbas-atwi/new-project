const btnPost = document.querySelector(".section-postar a");
const inputsValue = document.querySelector(".section-postar input");
const sectionContainer = document.querySelector(".post-container");
const date = new Date();
const hours = [date.getHours(), date.getMinutes()];
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

inputsValue.addEventListener("keyup", () => {
  if (inputsValue.value.length > -0 && inputsValue.value.length != null) {
    btnPost.classList.add("active");
    // alert();
  }
});
btnPost.addEventListener("click", (e) => {
  e.preventDefault();
  posts();
});
