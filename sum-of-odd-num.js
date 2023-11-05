const prompt = require('prompt-sync')();

let limit = prompt("Enter a limit :");
limit = Number.parseInt(limit);


let sum = 0;

for(let i=0; i<limit; i++){
if (i % 2 !== 0) {
     sum += i; 
}
}
console.log(sum);