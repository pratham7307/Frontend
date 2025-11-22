const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("enter the first number num1",num1=>{
    readline.question("enter the second number num2",num2=>{
        readline.question("enter the third number num3",num3=>{
           if(num1>num2 && num1>num3){
              console.log("num1");
           }else if(num2>num1 && num2>num3){
            console.log("num2");
           }else{
            console.log("num3");
           }
           readline.close();
        });
    });
});