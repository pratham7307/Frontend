// to take input in vs code
// const readline=require("readline").createInterface({
//     input:process.stdin,
//     output:process.stdout
// });
// readline.question("enter your name: ",name=>{
//     console.log(`hello, ${name}!`);
//     readline.close();
// });
// to add two numbers
const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("enter the first number: ",num1=>{
    readline.question("enter the second number ",num2=>{
       const sum=Number(num1)+Number(num2);
       console.log(`sum=${sum}`);
       readline.close();
    });
});