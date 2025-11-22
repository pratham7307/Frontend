const person={
    name:"pratham",
    age:22,
    introduce:function(){
        console.log(`hi my name is ${this.name} and my age is ${this.age}.`);
    }
};
person.introduce();