/**
 * Exercise One
 * Each course contains:
 * 1. name (String)
 * 2. semester (String)
 * 3. created year (number)
 * 4. teacher (object) -> name (string), age (number) 
 * 5.. List of students (array of objects), student has a name, age, year of graduation
*/

let course = {
    name:"DB",
    semester:"fall",
    createdYear: 2000,
    teacher: {
        name:"Mairna",
        age:29
    },
    student: [
        {
            name:"me",
            age: 20,
            graduationYear: 2022
         },
         {
            name:"me",
            age: 20,
            graduationYear: 2023
         },
         {
            name:"you",
            age: 20,
            graduationYear: 2021
         }], 
         toString: function(){
            return "Course name "+this.name +" taught by: " +this.teacher.name;
         }
};

console.log(course.name, course.createdYear);
console.log(course.teacher.name);

let students = course.student;
for(let index =0; index< students.length; index++) {
   console.log(students[index].name +"\n"); 
}
let sum=0;
let studentLength = students.length;

for(let index =0; index< studentLength; index++) {
    sum += students[index].age;
}

console.log(sum/studentLength);
 
let max = students[0].graduationYear;
for(let index =1; index< studentLength; index++) {
    if (students[index].graduationYear> max)
        max = students[index].graduationYear;
}


console.log(course.toString());
