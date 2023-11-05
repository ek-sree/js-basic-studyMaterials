const prompt = require('prompt-sync')();

main()
function main(){
let array1=[];
getArray(array1);
displayArray(array1);
}
function getArray(array1){
let size=parseInt(prompt("enter the size:"))
for(let i=0; i<size; i++){
array1[i]=[]
for(let j=0;j<size; j++){
array1[i][j]=parseInt(prompt("enter the values of array:"))
}
}
}
function displayArray(array1){
console.log("array elements are:");
console.log(array1);
}
