const prompt = require('prompt-sync')();

let input = prompt("enter a input:")
try{
let reversed=input.split('').reverse().join('')
console.log("Reversed string is :"+reversed);
}catch(err){
console.log(err.message)
}
finally{
console.log(`type of ${input} is ${typeof(input)}`)
}
