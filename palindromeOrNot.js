const prompt = require('prompt-sync')();

let word = prompt("Enter a word :");

let flag;

for (let i = 0; i < word.length; i++) {
    if (word[i] != word[word.length-1-i]) {
        flag = 1;
        break;
    }   
}
if (flag) {
    console.log("Its not palindrome");
}else{
    console.log("Its a palindrome");
}