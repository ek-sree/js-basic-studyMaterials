const prompt = require('prompt-sync')();

main();
function main(){
    let array = [];
    getArray(array);
    displayArray(array);
}

function getArray(array){
    let size = parseInt(prompt("Enter the size of an array :"));

    for(let i=0; i<size; i++){
        array[i] = prompt("Enter the value :");
    }
}

function displayArray(array) {
    console.log(array);
}