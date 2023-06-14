const btnPost = document.querySelector(".section-postar a");
const inputsValue = document.querySelector(".section-postar input");
const sectionContainer = document.querySelector(".post-container");
const date = new Date();
const hours = [date.getHours(), date.getMinutes()];
btnPost.addEventListener("click", (e) => {
  e.preventDefault();
  const div = document.createElement("div");
  const span = document.createElement("span");
  const comments = document.createElement("p");
  div.setAttribute("class", "new-post");
  div.appendChild(span);
  span.innerHTML = `${hours[0]}:${hours[1]}:${date.getSeconds()}`;
  comments.innerHTML = inputsValue.value;
  div.appendChild(comments);
  sectionContainer.appendChild(div);
});
