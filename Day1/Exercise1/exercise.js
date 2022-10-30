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
            name:"me",
            age: 20,
            graduationYear: 2021
         }]
};
