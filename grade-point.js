const prompt = require('prompt-sync')();

const wt=parseInt(prompt("Enter the mark in written test:"));
const lb=parseInt(prompt("Enter the mark in lab exams:"));
const at=parseInt(prompt("Enter the mark in assignment:"));  
grade= ((wt*70)+ (lb*20) + (at*10))/100;
console.log("Grade is:",grade);
