// // setInterval

// const runEvery = () => {
//     console.log("This code runs every in 1000 secounds");
// }

// setInterval(runEvery, 1000);

// const timerId = setInterval(() => {
//     console.log("hi");
// }, 1000)

// const stopBtn = document.createElement("button");
// document.body.appendChild(stopBtn);
// stopBtn.innerHTML = 'Stop';

// stopBtn.addEventListener("click", () => {
//     clearInterval(timerId)
// })

// const clock = document.getElementById("clock");

// function getCurruentTime() {
//   const now = new Date();

//   const hours = now.getHours() < 10 ? `0${now.getHours()}` : now.getHours();
//   const min = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes();
//   const sec = now.getSeconds() < 10 ? `0${now.getSeconds()}` : now.getSeconds();

//   clock.innerHTML = `${hours}:${min}:${sec}`;
// }

// setInterval(getCurruentTime, 1000);

const btn = document.querySelector(".btn");
const clock = document.getElementById("clock");
let hours = 0;
let min = 0;
let sec = 0;

const runStopWatch = () => {
  sec++;
  if (sec < 10) {
    sec = clock.innerHTML = `0${sec++}`;
  }
  if (min < 10) {
    min = clock.innerHTML = `0${min++}`;
  }
  if (hours < 10) {
    hours = clock.innerHTML = `0${hours++}`;
  }
  if (sec > 59) {
    min++;
    sec = 0;
  }
  if (min > 59) {
    hours++;
    min = 0;
    sec = 0;
  }
  clock.innerHTML = `${hours}:${min}:${sec}`;
};

btn.addEventListener("click", () => {
  setInterval(runStopWatch, 1);
});
