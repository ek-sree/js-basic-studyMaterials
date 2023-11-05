const prompt = require('prompt-sync')();

let mark;
    do{
     mark = prompt("Enter your mark out of 100 :");
    mark=Number.parseFloat(mark);
    }
    while (mark > 100 || mark < 0);

    if (mark >= 50) {
        console.log("Passed");
    }else{
        console.log("Failed");
    }


