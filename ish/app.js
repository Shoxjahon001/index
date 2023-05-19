const imput = document.querySelector("input");
const form = document.querySelector("form");
const taskCollection = document.querySelector("ul");
const trash = document.querySelector(".fa-trash");
const yesOrNo = document.querySelector(".yesorno");
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const imputValue = imput.value;
  const taskLi = document.createElement("li");
  const taskText = document.createElement("p");
  const closeIcon = document.createElement("i");
  closeIcon.className = "fa-solid fa-times";
  taskLi.className = "task";

  taskText.innerHTML = imputValue;
  taskLi.appendChild(taskText);
  taskLi.appendChild(closeIcon);
  taskCollection.appendChild(taskLi);

  closeIcon.addEventListener("click", () => {
    closeIcon.parentElement.remove();
  });
 
  imput.value = "";
  imput.focus();
});

 yes.addEventListener("click", (e) => {
    e.preventDefault();
    taskCollection.innerHTML = "";
    yesOrNo.classList.remove("yesorno__active");
  });
  no.addEventListener("click", (e) => {
    e.preventDefault();
    yesOrNo.classList.remove("yesorno__active");
  });
trash.addEventListener("click", toggIeSlidebar);

function toggIeSlidebar() {
  yesOrNo.classList.toggle("yesorno__active");
}

// function toggIeSlidebar() {
//   if (confirm("Hammasini o'chirmoqchimisiz?")) {
//     taskCollection.innerHTML = "";
//   }
// }
