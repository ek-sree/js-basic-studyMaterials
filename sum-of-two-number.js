const prompt = require('prompt-sync')();


let number1 = prompt("Enter first number :");
number1=Number.parseInt(number1);

let number2 = prompt("Enter second number :");
number2=Number.parseFloat(number2)

let sum = number1 + number2;

console.log(sum);