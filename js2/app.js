// let comments;

fetch("https://api.escuelajs.co/api/v1/products")
    .then((res) => res.json())
    .then((data) => {
        return (comments = data);
    })
    .catch((arr) => console.log(err))
    .finally(() => {
    console.log(comments);
});

// let userData;
// async function getUser() {
//     try {
//         const res = await fetch("https://api.escuelajs.co/api/v1/products").then(res =>  res.json)
//     } catch (error) {
        
//     }
// }