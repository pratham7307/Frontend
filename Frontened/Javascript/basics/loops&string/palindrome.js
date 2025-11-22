const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("enter the string ",str1=>{
    str1=str1.toLowerCase();
    // let count=0;
    // for(let ch of str1){
    //     if(vowels.includes(ch)){
    //         count++;
    //     }
    // }
    let reversed=str1.split('').reverse().join('');
    console.log(str1===reversed);
    readline.close();}
);