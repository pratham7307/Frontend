// const name=prompt("enter your name:");
// console.log(name);
// alert("hello,"+name+" ! welcome to the javascript world.");
// document.write("<h1>Hello, "+name+"!</h1>");
// const age = prompt("Enter your age:");
// console.log(age);
// if (age >= 18) {
//   alert("You are eligible to vote!");
//   document.write("<h2>You are eligible to vote!</h2>");
// } else {
//   alert("You are not eligible to vote yet.");
//   document.write("<h2>You are not eligible to vote yet.</h2>");
// }
// alert("type of"+ typeof(age));
// document.write("type of "+typeof(age));
// const arr=new Array("abc","def","efg","hij");
// console.log(arr);
// let n=prompt("enter the number");
// if(n%2!=0){
//     console.log
// }
// function isOdd(num) {
//   return num % 2 !== 0;
// }
// console.log(isOdd(2));
// const user="Aman";
// const points=120;
// // const message="Hey"+user+", you have "+points+" points!";
// // console.log(message);
// const messagee=`Hey ${user} ,you have ${points} points.`;
// console.log(messagee);
// const person={
//     firstName:"nitin",
//     lastname:"sharma",
//     age:21,
//     introduce:function(){
//         console.log(`hi my name is ${this.firstName} & ${this.lastname} an d i am${this.age} years old.`);
//     },
// };
// console.log(person["firstName"]);
// console.log(person.lastname);
// person.introduce();
// console.log("hello");
// const mainHeading=document.getElementById("title");
// mainHeading.textContent = "faltu ki baaatein";
    function addTask() {
        let taskText = document.getElementById("todoInput").value;
        let category = document.getElementById("category").value;

        if (taskText.trim() === "") {
            alert("Please enter a task!");
            return;
        }

        let taskList = document.getElementById("taskList");

        let taskDiv = document.createElement("div");
        taskDiv.classList.add("task"); 
        taskDiv.innerHTML = `
            <div class="left">
                <input type="checkbox" onclick="toggleComplete(this)">
                <span>${taskText} (${category})</span>
            </div>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        `;
       taskList.appendChild(taskDiv);


        document.getElementById("todoInput").value = "";
    }   

    function toggleComplete(checkbox) {
        let task = checkbox.parentElement.parentElement;
        task.classList.toggle("completed");
    }

    function deleteTask(button) {
        button.parentElement.remove();
    }
