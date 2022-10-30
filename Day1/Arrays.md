# Arrays in JS Tutortial
#### Learn about arrays and its methods

##  What is an Array?
An object that can store multiple values at once. It is essential for sorting and relating items together.

```
let apps = ["discord", "slack", "twitter"];
console.log(apps[0]) // discord
apps.push("facebook");
console.log(apps.length) //4
let app = apps.pop();
console.log(app) // facebook
console.log(apps.length) //3

```

##  Array Methods
### ForEach
* iterates through an array
* Runs a callback on each value in the array
* Returns undefined.

![filter](/Day1/assets/forEach.png)
 ```
 let gifts = [
    {
        name:"watch",
        price: 150,
    },
     {
        name:"mug",
        price: 20,
    },
     {
        name:"rose",
        price: 1,
    },
     {
        name:"necklace",
        price: 200,
    }];

 gifts.forEach(function(gift){
    console.log(gift.name +" "+  gift.price);
 }); 

 ```

### Filter
* Creates a new array
* iterates through an array
* Runs a callback on each value in the array
* if the callback returns true, it adds  the value to the new array, if not the value will ignore the value

![filter](/Day1/assets/filter.png)
 ```
 let gifts = [
    {
        name:"watch",
        price: 150,
    },
     {
        name:"mug",
        price: 20,
    },
     {
        name:"rose",
        price: 1,
    },
     {
        name:"necklace",
        price: 200,
    }];

 let filteredGifts = gifts.filter(function(gift){
    return gift.price < 50 ;

 }); // we will get a rose and mug;

 ```

### Map
* Creates a new array
* iterates through an array
* Runs a callback on each value in the array
* Adds the results of that callback functions to the new array
* Returns the new array
* ALWAYS returns a new array of the SAME length

![filter](/Day1/assets/map.png)
 ```
 let gifts = [
    {
        name:"watch",
        price: 150,
    },
     {
        name:"mug",
        price: 20,
    },
     {
        name:"rose",
        price: 1,
    },
     {
        name:"necklace",
        price: 200,
    }];
    let delivery = 20;
 let mapGifts = gifts.map(function(gift){
    return gift.price + 20 ;

 }); // we will get a new array with prices added 20

 ```

### Reduce
* iterates through an array
* The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place
* Runs a callback on each value in the array with the returned value from the calculation on the preceding element.
* Returns a single value


![filter](/Day1/assets/reduce.png)
 ```

let gifts = [20,150,30,4]

    let reduceGifts = gifts.reduce(function(a,b){
        console.log("First Value " + a);
        console.log("Second Value " + b);

        return a+b;

    },20);

    console.log(reduceGifts);

 ```
### Every
* iterates through an array
* Runs a callback on each value in the array
* if the callback function returns false for any single value, it return false . Otherwise, return true
* ALWAYS returns a BOOLEAN

![filter](/Day1/assets/every.png)
 ```
 let gifts = [
    {
        name:"watch",
        price: 150,
    },
     {
        name:"mug",
        price: 20,
    },
     {
        name:"rose",
        price: 1,
    },
     {
        name:"necklace",
        price: 200,
    }];
    let delivery = 20;
 let isPriceLow = gifts.every(function(gift){
    return gift.price < 250 ;

 }); // isPriceLow = true; the array passed the test case. 

 ```

### Some
* iterates through an array
* Runs a callback on each value in the array
* It returns true if it finds an element that passes the condition. otherwise it returns false.
* ALWAYS returns a BOOLEAN

![filter](/Day1/assets/some.png)
 ```
 let gifts = [
    {
        name:"watch",
        price: 150,
    },
     {
        name:"mug",
        price: 20,
    },
     {
        name:"rose",
        price: 1,
    },
     {
        name:"necklace",
        price: 200,
    }];
    let delivery = 20;
 let isPriceLow = gifts.sine(function(gift){
    return gift.price < 50 ;

 }); // isPriceLow = true; because two elements are less than 50. 

 ```

Learn more Array methods [here.](https://www.w3schools.com/js/js_array_methods.asp) 