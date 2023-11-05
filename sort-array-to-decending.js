const prompt = require('prompt-sync')();

let input =prompt ("Enter an array with comas:");

let arr=input.split(",");

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
       if(arr[i]<arr[j]){ 
    let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
       }
    }
}
    console.log("Sorted array is:",arr);
