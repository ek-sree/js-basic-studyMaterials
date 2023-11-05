const prompt = require('prompt-sync')();

let array = prompt("Enter the array with comas: ");


let count = 0;


for(let i=0; i<array.length; i++){
if (array[i] % 2 == 0) {
    count++;
}
}
console.log("Even numbers in array :"+count);

