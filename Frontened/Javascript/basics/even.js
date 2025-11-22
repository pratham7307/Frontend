const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("enter the number: ",num1=>{
    if(num1%2==0){
        console.log("even number");
    }else{
        console.log("odd number");
    }
    readline.close();
});