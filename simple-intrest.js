const prompt = require('prompt-sync')();

let p = prompt("Enter the principle amount :");
    p = Number.parseInt(p);

let r = prompt("Enter the intrest rate :");
    r = Number.parseFloat(r);

let n = prompt("Enter the number of year :");
    n=Number.parseFloat(n);

    let si = ((p*r*n)/100);

    console.log("Simple intrest is :" +si);
