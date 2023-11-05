const prompt = require('prompt-sync')();

let num = prompt("Enter a number you want to multiple :");
num = Number.parseInt(num);

for(let i = 1; i <= 10; i++){
    console.log(i +'*' +num +'='+num*i );
}