// function sayHi() {
//     console.log("sayHi function ishladi!")
// }

// sayHi();

// const greet = function () {
//     console.log("greet function works")
// };

// greet();

// const arrowFunc = () => {
// alert("It works");
// };

// arrowFunc();

// (function () {
//     alert("life ishladi");
// })();


// function calcValues(a, b){
//     console.log(a * b)
// }

// calcValues(3, 4);

const closeIcon = document.querySelector(".x")
const sidebar = document.querySelector(".box");
const uzb = document.querySelector(".a")
const eng = document.querySelector(".a2")
const rus = document.querySelector(".a3")
const p = document.querySelector(".p")

closeIcon.addEventListener("click", toggIeSlidebar)

function toggIeSlidebar() {
  sidebar.classList.toggle("box__active");
}

uzb.addEventListener("click", function() {
    p.innerHTML = "Uzb";

});
eng.addEventListener("click", function() {
    p.innerHTML = "Eng";

});
rus.addEventListener("click", function() {
    p.innerHTML = "Rus";
});