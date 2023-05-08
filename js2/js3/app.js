let arr = [1, 2, 3, 3, 3, 4, 4, 4];
console.log(arr.slice(1, 4));

console.log(arr);
// filter

console.log(arr.filter( num => num< 10));

// reduce

console.log(arr.reduce( (a, b) => a + b, 0));

// forEach


arr.forEach(el => {
    console.log(el * 2);
})



console.log(arr.map(el => el * 2));