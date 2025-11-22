const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("enter the num ",num1=>{
    for(let i=1;i<=num1;i++){
        console.log(i)
    }
readline.close();}
);