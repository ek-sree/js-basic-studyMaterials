const prompt = require('prompt-sync')();

let size = parseInt(prompt("Enter the size of array :"));
let array = [];

for(let i=0; i<size; i++){
    array[i] = parseInt(prompt("Enter the elements of array :"));

}

myFilter(array);
function myFilter(array) {
    let sum = 0;
    for(let i=0; i<size; i++){
        sum += array[i];
    }
    console.log(sum);
    return callback(sum);
}

function callback(sum){
    if (sum%2===0) {
        console.log("Even");
    }else{
        console.log("Odd");
    }
}