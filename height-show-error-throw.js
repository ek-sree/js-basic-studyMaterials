const prompt = require('prompt-sync')();

let height = parseInt(prompt("Enter your height :"));

try{
if (isNaN(height)) {
    throw("notANumberError!");
}
else if(height >= 70){
    throw("hugeHeightError!");
}
else if(height <= 0){
    throw("tinyHeightError");
}else{
    console.log("Height is :"+height);
}
}
catch(err){
    console.log(err);
}