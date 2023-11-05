const prompt = require('prompt-sync')();

let size=prompt("Enter the size: ");
let array1=[];
let array2=[];
for(let i=0;i<size;i++){
    array1[i]=[];
    for(let j=0;j<size;j++){
        array1[i][j]=parseInt(prompt("Enter the values:"));
    }
}
for(let i=0;i<size;i++){
    array2[i]=[];
    for(let j=0;j<size;j++){
        array2[i][j]=parseInt(prompt("Enter the second values:"));
    }
}
for(let i=0;i<size;i++){
    for(let j=0;j<size;j++){
       array2[i][j]=array1[i][j]+array2[i][j];
    }
    }
    console.log("Sum of array is:");
    console.log(array2);