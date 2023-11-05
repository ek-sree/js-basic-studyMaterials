const prompt = require('prompt-sync')()

let limit = parseInt(prompt("Enter the limit of an array :"));

let array1 =[];
let array2 = [];

for(let i=0; i<limit; i++){
    array1[i] = parseInt(prompt("Enter the value  of array :"));
}

for(i=0; i<limit-1; i++){
    array2[i] = array1[i] * array1[i+1];
}
console.log(array2);