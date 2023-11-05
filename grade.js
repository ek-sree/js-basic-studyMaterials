const prompt = require('prompt-sync')();

let mark = prompt("Enter your total mark :");
    mark=Number.parseFloat(mark);

if (mark > 90) {
    console.log("Your grade is A");
}
else if(mark >= 80 && mark <= 89){
    console.log("Your grade is B");
}
else if(mark >= 70 && mark <= 79){
    console.log("Your grade is c");
}
else if(mark >= 60 && mark <= 69){
    console.log("Your grade is D");
}
else if(mark >= 50 && mark <= 59){
    console.log("Your grade is E");
}else{
    console.log('You are faild');
}


