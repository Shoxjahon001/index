// const title = document.querySelector("h1")

// title.innerHTML = "CSS";
// title.style = "color: red;";

// const lorem = document.querySelector("p")

// lorem.style = "font-size: 25px; color: blue;"

// const newArr = [1, 2, 3, 4, 5,];
// console.log(newArr[newArr.length - 1])

// const user = {
//     name: "Rose",
//     age: 23,
//     isStudying: false,
//     "user plan": "premium",
// };
// console.log(user)
// const newArr = [
//   {
//     id: 0,
//     name: "Olimjon",
//   },
//   {
//     id: 1,
//     name: "Shoxjahon",
//   },
//   {
//     id: 2,
//     name: "Ozodbek",
//     phones: [
//       {
//         title: "S23 Ultra",
//       },
//       {
//         title: "iPhone 14 pro max",
//       },
//       {
//         title: "iPhone 12 pro max",
//       },
//       {
//         title: "iPhone 13 pro max",
//       },
//       {
//         title: "Redmi note 12 pro",
//         users: [
//           {
//             id: 0,
//             name: "John",
//           },
//           {
//             id: 1,
//             name: "Rose",
//           },
//           {
//             id: 2,
//             name: "Doe",
//           },
//           {
//             id: 3,
//             name: "John",
//           },
//           {
//             id: 4,
//             name: "Nick",
//           },
//           {
//             id: 5,
//             name: "Ethan",
//           },
//           {
//             id: 6,
//             name: "Alex",
//             cars: [
//                 {
//                     id: 1,
//                     title: "BMW",
//                 },
//                 {
//                     id: 2,
//                     title: "MERS",
//                 },
//                 {
//                     id: 3,
//                     title: "LADA",
//                 },
//                 {
//                     id: 4,
//                     title: "LADA1",
//                     new: [
//                         {
//                             number: 1,
//                         },
//                         {
//                             number: 2,
//                         },
//                         {
//                             number: 3,
//                         }
//                     ]
//                 },
//             ]
//           }
//         ],
//       },
//     ],
//   },
// ];

// console.log(newArr[newArr.length - 1].phones[newArr[newArr.length - 1].phones.length - 1].title)
// const add = newArr[newArr.length - 1].phones[newArr[newArr.length - 1].phones.length - 1].title

// console.log(add)

// const html = document.querySelector("h1")

// html.innerHTML = add

// console.log(
//   newArr[newArr.length - 1].phones[newArr[newArr.length - 1].phones.length - 1].users[
//     newArr[newArr.length - 1].phones[
//       newArr[newArr.length - 1].phones.length - 1
//     ].users.length - 1
//   ].cars[
//     newArr[newArr.length - 1].phones[newArr[newArr.length - 1].phones.length - 1].users[
//         newArr[newArr.length - 1].phones[
//           newArr[newArr.length - 1].phones.length - 1
//         ].users.length - 1
//       ].cars.length - 1
//   ].new[newArr[newArr.length - 1].phones[newArr[newArr.length - 1].phones.length - 1].users[
//     newArr[newArr.length - 1].phones[
//       newArr[newArr.length - 1].phones.length - 1
//     ].users.length - 1
//   ].cars[
//     newArr[newArr.length - 1].phones[newArr[newArr.length - 1].phones.length - 1].users[
//         newArr[newArr.length - 1].phones[
//           newArr[newArr.length - 1].phones.length - 1
//         ].users.length - 1
//       ].cars.length - 1
//   ].new.length - 1].number
// );
// let a = 10;
// let b = 15;

// function sayHi() {
//   const result = a + b;
//   console.log(result);
// };

// sayHi();
// const closeIcon = document.querySelector(".x")
// const sidebar = document.querySelector(".menu");

// closeIcon.addEventListener("click", toggIeSlidebar)

// function toggIeSlidebar() {
//   sidebar.classList.toggle("menu__active");
// }

// let num = 10;
// console.log(num.toString);

// console.log(num + "");

// console.log(String(num));

// let str = "10";

// console.log(Number(str));

// console.log(+str);

// console.log(parseInt(str));

// console.log(parseFloat(str));

// const date = new Date();

// console.log(string(date.getDate()));

// console.log(Number(false));
// console.log(Number(false));

// console.log(String(false));

// for(let i = 0; i < 100; i++) {
//   console.log(i);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i] + 20);
// }

// for(let a = 10; a < 31; a++) {
//   console.log(a);
// }

const d = 100;

for (let b = 1; b <= d; b++) {
  if (b % 2 > 0) {
    console.log(b);
  }
}
