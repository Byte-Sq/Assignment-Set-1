//psuedo code from number 5
//1. create a function that takes an array as a parameter
//2. the function returns an object with keys: even:[even numbers], odd:[odd numbers], chars:[all characters]

let array = [3.0, "a", 7, "x", 20, "d", 4, "f", 8];
let emptyObj = { even: [], odd: [], chars: [] };
function sortObj(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && array[i] % 2 === 0) {
      emptyObj.even.push(array[i]);
    } else if (typeof array[i] === "number" && array[i] % 2 !== 0) {
      emptyObj.odd.push(array[i]);
    } else {
      emptyObj.chars.push(array[i]);
    }
  }
}
sortObj(array);
console.log(emptyObj);
