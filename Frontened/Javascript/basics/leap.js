const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("enter the year ",num1=>{
    num1=Number(num1);
    if((num1%4===0 && num1%100!=0)||(num1%400===0)){
        console.log("leap year");
    }else{
        console.log("not leap year");
    }
readline.close();}
);