const students=[
    { name: "Aman", marks: 75 },
    { name: "Riya", marks: 88 },
    { name: "Karan", marks: 92 },
    { name: "Sneha", marks: 60 }
];
students.forEach(student =>{
    if(student.marks>80){
        console.log(student.name);
    }
});