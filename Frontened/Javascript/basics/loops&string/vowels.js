const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});
readline.question("enter the string ",str1=>{
    str1=str1.toLowerCase();
    const vowels= ['a', 'e', 'i', 'o', 'u'];
    let count=0;
    for(let ch of str1){
        if(vowels.includes(ch)){
            count++;
        }
    }
    console.log(count);
    readline.close();}
);