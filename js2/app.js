const productsWrp = document.querySelector(".product__wrp");

const div = document.createElement("div");

fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((pro) => {
      const productCard = `<div>
                <h2>${pro.id}</h2>
                <h1>${pro.title}</h1>
                <img src="${pro.images}" alt="" >
                <p>${pro.description}</p>
            </div>`;
      productsWrp.insertAdjacentHTML("beforeend", productCard);
      // console.log(pro);
    });
  })
  .catch((err) => console.log(err));

const title = document.querySelector(".pro__title");
const price = document.querySelector(".pro__price");
const description = document.querySelector(".pro__desc");
const categoryID = document.querySelector(".pro__id");
const imageLink = document.querySelector(".pro__link");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("https://api.escuelajs.co/api/v1/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Orgin": "*",
    },
    body: JSON.stringify({
      title: title.value,
      price: +price.value,
      description: description.value,
      categoryId: +categoryID.value,
      images: [imageLink.value],
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
