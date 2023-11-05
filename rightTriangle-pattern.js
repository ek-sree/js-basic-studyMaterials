const prompt=require('prompt-sync')();

let num =prompt("enter the limmit");
num=Number.parseInt(num);
for(let i=1; i<=num;i++)
{
    let row='';
    for(let j= 2;j<=i;j++)
    {
        row+=j;
    }
    console.log(row);
}

