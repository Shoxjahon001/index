const closeIcon = document.querySelector(".img")
const sidebar = document.querySelector(".box");


closeIcon.addEventListener("click", toggIeSlidebar)

function toggIeSlidebar() {
  sidebar.classList.toggle("box__active");
}