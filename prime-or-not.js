const prompt = require('prompt-sync')();

let num = prompt("Enter a number :");
num = Number.parseInt(num);

let flag = 0;

for(let i=2; i<num; i++){
    if (num % i === 0) {
        flag = 1;
        break;
    }
}

if (flag===1) {
    console.log(`Entered number ${num} is not a prime`);
}else{
console.log(`Entered number ${num} is a prime`);
}