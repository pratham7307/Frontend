const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("enter the number num1",num1=>{
    readline.question("enter the number num2",num2=>{
        let temp=Number (num1);
        num1= Number (num2);
        num2=temp;
        console.log(`num1 ${num1}`);
        console.log(`num2 ${num2}`);
        readline.close();
    });
});
