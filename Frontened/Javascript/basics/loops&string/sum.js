const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("enter the num ",num1=>{
    let sum=0;
    for(let i=1;i<=num1;i++){
       sum+=i;
    }
    console.log(sum);
readline.close();}
);