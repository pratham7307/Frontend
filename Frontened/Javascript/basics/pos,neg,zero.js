// to check number is positive,negative,zero
const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("enter the number ",num1=>{
    if(num1>0){
        console.log("positive");
    }else if(num1==0){
        console.log("zero");
    }else{
        console.log("negative");
    }
readline.close();}
)