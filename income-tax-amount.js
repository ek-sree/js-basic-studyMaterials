const prompt = require('prompt-sync')();

const income=parseInt(prompt("enter the income:"))
let tax;
if(income<=250000){
    tax="No Tax";
}
else if(income>=250000&&income<=500000){
    tax=(income*5)/100;
}
else if(income>=500000&&income<=1000000){
    tax=(income*10)/100;
}
else if(income>=1000000&&income<=5000000){
    tax=(income*30)/100
}
else{
    tax="invalid entry"
}
console.log("income tax amount"+tax)
