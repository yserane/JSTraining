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
    - The named functions, in JavaScript objects, are called **methods**.

```
        let person = {
            name: "Mairna",
            age: 29,
            isAdult: true,
            printFavWord: function(){
                console.log("Food")l
            }
        };
```
* Array  ```
        let countries = ["Palestine", "UAE", "Jordan"];
        ```
* Function 
 ```
        let sum = function(a + b) 
        {
            return a + b;
        };

```

## ⭐️ Var vs Let vs Const










