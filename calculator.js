const prompt = require('prompt-sync')();

class Operations {
    addition(a, b) {
        return a + b;
    }

    subtraction(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    division(a, b) {
        if (b === 0) {
            return "Division by zero is not allowed.";
        }
        return a / b;
    }
}

const op = new Operations();

let a = parseFloat(prompt("Enter the first number: "));
let b = parseFloat(prompt("Enter the second number: "));
let result;
let value = parseInt(prompt("1: Addition\n2: Subtraction\n3: Multiply\n4: Division\nEnter your choice: "));

if (isNaN(a) || isNaN(b)) {
    console.log("Input value ,,value cannot be blank.");
} else {
    switch (value) {
        case 1:
            result = op.addition(a, b);
            break;
        case 2:
            result = op.subtraction(a, b);
            break;
        case 3:
            result = op.multiply(a, b);
            break;
        case 4:
            result = op.division(a, b);
            break;
        default:
            console.log("Invalid choice");
    }
        console.log("Result:", result);
}
