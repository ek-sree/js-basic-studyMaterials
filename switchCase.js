const prompt = require('prompt-sync')();

let number = prompt("Enter a number :");
number = Number.parseInt(number);

switch (number) {
    case 1:
        console.log("Sunday");
        break;

     case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;

    case 4:
        console.log("Wednesday");
        break;

    case 5:
        console.log("Thursday");
        break;

    case 6:
        console.log("Firday");
        break;

    case 7:
        console.log("Saturday");
        break;

    default:
        console.log("Invaild");
        break;
}