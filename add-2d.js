const prompt = require('prompt-sync')()

main()
function main(){
    let array1 = [];
    let array2 = [];

    let size = getArray(array1,array2);
    addArray(array1,array2,size)
    displayArray(array2);
}

function getArray(array1,array2){
    let size = parseInt(prompt("Enter the size of an array :"));
    for(let i=0; i<size; i++){
        array1[i]=[]
        for(let j=0; j<size; j++){
            array1[i][j] = parseInt(prompt("Enter the value of first array :"));
        }
    }

    for(i=0; i<size; i++){
        array2[i]=[]
        for(j=0; j<size; j++){
            array2[i][j] = parseInt(prompt("Enter the value of second array :"));
        }
    }
    return size;
}

function addArray(array1,array2,size){
    for(i=0; i<size; i++){
        for(j=0; j<size; j++){
            array2[i][j] = array1[i][j] + array2[i][j];
        }
    }
}

function displayArray(array2){
    console.log(array2);
}