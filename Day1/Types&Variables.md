# JavaScript Data Types Variables
#### Learn how to define variables in JS.


## ⭐️ JS Coding Conventions
* Cannot be reserved keyword (let, if, else, function, ...).
* Cannot contain space or hyphen (dash)
* Variable and function names written as camelCase. Example: userName, dateOfBirth.
* Case sensitive, variable **name** is not the same **NAME** and is not the same as **Name**.
* Meaningful & descriptive. Avoid using x,y,a,b naming.
* Don't user numbers at the beginning. Example: 
        ```
        let 9coins = 9;
        ```

* Use Capital letters for constant variables.Example: 
        ```
        let PI = 3.14;
        ```


## ⭐️ JS Data Types
### Primitive Types:
* String  ```
        let name = "Ziad";
        ```
* Number  ```
        let age = 30;
        ```
* Boolean  ```
        let isAdult = true;
        ```
* Null : to represent no value.  ```
        let career = null;
        ```
* Undefined: means that the variable has been declared but not been assigned a value . ```
        let career;
        ```

### Reference Types:
* Object :  
    - contain multiple primitive data types
    - The named values, in JavaScript objects, are called **properties**.
    - The named functions, in JavaScript objects, are called 
    **methods**.
    - Access using dot or brackets

```
        let person = {
            name: "Mairna",
            age: 29,
            isAdult: true,
            printFavWord: function(){
                console.log("Food")l
            }
        };
        console.log(person.name);
        console.log(person["name"]);

```
* Array  ```
        let countries = ["Palestine", "UAE", "Jordan"];
        ```
* Function 
 ```
        let sum = function(a , b) 
        {
            return a + b;
        };

```

## ⭐️ Var vs Let vs Const

Var is old, let and cont were introduced to js in 2015. 

![GSG](/Day1/assets/varvsletvsconst.png)

### ⚪️ Scope

```
    function newFunction() {
        var hello = "hello";
    }
   console.log(hello); // error: hello is not defined

    function newFunction() {
        var word = "hello";
        if(true){
                var word = "Fun"; //works without any error as scope is different.
                console.log(word) //prints "Fun"
        }
        console.log(word) //prints "Fun"
}

```

```
    function newFunction() {
        let hello = "hello";
    }
   console.log(hello); // error: hello is not defined


        function newFunction() {
        let word = "hello";
        if(true){
                let word = "Fun"; //works without any error as scope is different.
                console.log(word) //prints "Fun"
        }
        console.log(word) //prints "Hello"
        }

```

```
    function newFunction() {
        let value = 4;
        if (value > 4){
        cont newValue = 5.5;
        }
        console.log(newValue); // error: newValue is not defined

    }

```


### ⚪️ Hoisting
Hoisting is the abillity to define a variable before it's decarled

**This works with**
```
x = 8; 

console.log(x);

var x;

```

**This DOESN'T works with let and const**
```
x = 8; 

console.log(x);

const x;

```
```
x = 8; 

console.log(x);

const x;

```

### ⚪️ Reassign
Reassign a value to a variable.
**This works with var and let**
```
var color = "yellow"; 
color = "red"
console.log(color); // will print red

```

```
let color = "yellow"; 
color = "red"
console.log(color); // will print red

```

**This DOESN'T works with const**
```
const COLOR = "Yellow";
COLOR = "Red";
console.log(COLOR); // error
```

### ⚪️ Redecalre
declare the variable again.
**This works with var**
```
var color = "yellow"; 
var color = "red"
console.log(color); // will print red

```


**This DOESN'T works with let and const**

```
let color = "yellow"; 
let color = "red" // error

```
```
const COLOR = "Yellow";
const COLOR = "Red"; //error
```

### 🔴 A serious problem with var

if you declared a variable somewhere, then you go and declare it again, it will override that value and loose the first one. 
This will make it harder to developer to debug. 

```
 var greeter = "hi";
	var times = 4;
	if (times > 3) {
    	var greeter = "hello";
	}
   console.log(greeter) // will print hello and hi is lost!

```











