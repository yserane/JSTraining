# Rest vs Spread Operators & ES2015/ES6 
#### Learn about features in JS and enhancments in ES6


## ⭐️ The Rest Operator
Allows a function to accept indefinite number of arguments as an array.

```
function sum(...args) {
  let total = 0;
    total = args.reduce(function(prev, next)){
    return prev + next;
    };
  return total;
}

console.log(sum(1, 2, 3)); // expected output: 6

console.log(sum(1, 2, 3, 4)); // expected output: 10

```

## ⭐️ Spread Operator
* Spread is the same (...), but outside the arguments of a function
* Used on arrays and string to spread each value out with a comma between the values.

```
function sum(x, y, z) {
  	return x + y + z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // expected output: 6
console.log(sum.apply(null, numbers)); // expected output: 6


```

## ⭐️ Es6 features
### 1. Keywords: let and const
### Arrow Functions:
less syntax to write function expression by removing the "function" and "return" keywords.
**old way**
```
function sum(a,b) {
    return a+b;
}
```

**new way**
```
let sum = (a, b) => a + b;
console.log(sum(1, 2)); // Output 3
```

**old way**
```
[1,2,3].map(function(value){
      		return value*2;
 }); // output://[2,4,6]
```

**new way**
```
[1,2,3].map((value)=> value*2;); //output: [2,4,6]
```

### 2. Default Parameters
Allows function parameters to have a default value if no value or undefined was passed to the function.
```
function sum(a, b = 1) {
  return a + b;
}

console.log(sum(5, 2)); // expected output: 7

console.log(sum(5)); // expected output: 6

```
### 3. Multi-line Strings
Use back-ticks(`) to create multi-line strings. 

```
console.log(`       
              Hello
              Multi
              Line!`);
output =>  /*Hello 
            This
            Works*/

```

**Won't work with double or single quote**
```
console.log("       
              Hello
              Multi
              Line!");//Syntax Error!
                        
```

### 4. Template Literals
String template using ${PARAMETER} and is used inside of the back-ticked string

```
let name = "Hadi";
console.log(`My name is ${name}, what's your name?`); // My name is Hadi, what's your name?
```

### 5. Destructuring Assignment
Extract values from arrays and objects easily. 

```
//Array Destructuring
let names = ["Leyan", "Mairna"];
let [a, b] = names; // Array destructuring assignment
console.log(a, b); // Leyan, Mairna

//Object Destructuring
let person = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

// Destructuring the object into variables with
// different names than the object variables
var { firstname: fn, lastname: ln, dateofbirth: dob } = person;
console.log( fn, ln, dob);console.log(name, age);
```

