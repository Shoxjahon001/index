const icon = document.querySelector(".fa-bars")
const box = document.querySelector(".nav__2")

icon.addEventListener("click", toggIeSlidebar);

function toggIeSlidebar() {
  box.classList.toggle("nav__2__active");
}