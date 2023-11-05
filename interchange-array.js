const prompt = require('prompt-sync')();

let array1 = prompt("Enter the elements of first array :");
let array2 = prompt("Enter the elements of second array");

console.log("before swapping");
console.log("Array 1 :"+array1);
console.log("Array 2 :"+array2);

let temp = array1;
array1 = array2;
array2 = temp;

console.log("After swapping");
console.log("Array 1 :" +array1);
console.log("Array 2 :" +array2);

