# JavaScript Tutortial
#### Learn the basics of JavaScript


![GSG](/Day1/assets/gsk.png)

##  The instructor 
 👋🏼, I'm Mairna Yousef. A software developer with +4 years experience in the software development cycle. I graduated in 2016 from BZU then recieved my master's degree from SUNY Oswego in 2022. 

## ⭐️ What is JavaScript
* Programming language initally designed to develop web pages
* In 1995, JavaScript was created by a Netscape developer named Brendan Eich.
* Most popular and used programming languages world-wide.
* Scripting language
* JS made its way into server-side. So you can use it for Full Stack development. 

## ⭐️ Scripting language vs Programming language
* All scripting languages (SLs) are programming languages (PLs), but the opposite is not correct.
* SLs offer less lines in coding, while PLs produce more lines of code.
* SLs are best for fast development. While programming languages are used to develop things from scratch.
*  SL example: JavaScript, PHP, SQL. 
* PL example: java, python, C, C++.


## ⭐️ Why JavaScript is so popular?

* Easy to learn/use.
* Cross-Browser compatiable: Chrome, Mozilla, IE, etc.
* Cross-platform development: Desktop. mobile, web-based application. 

## ⭐️ Setup JS enviroment
You will only need two things:
* Browser: the browser includes the JS engine.
* Editor: VS, Notepad++, Webstorm, or any editor you are comfirtable using. 

You can also develop JS online using online editor tools, for example: 
* jsfiddle.net
* codepen.io

## ⭐️ Terms you need to know 
* **JS**: Javascript
* **ECMAScript** is the standards and speciﬁcations run by ECMA organization.
* **Vanilla JavaScript**: pure JavaScript.
* **ES2015/ES6** : introduced huge enhancements to JS.
* **DOM**: Document Object Model.
* **BOM**: Browser Object Model.


## ⭐️ What is DOM?
The DOM represents the document as nodes and objects; that way, programming languages can minipulate content, styling, and structure. 

![DOM](/Day1/assets/dom.png)

📝 **Example**
```
<html>
    <body>
        <span id ="instructor">
        </span>
    </body>
    <script>
        document.getElementById("instructor").innerHTML = "Hello, it's Mairna.";
    </script>
</html>

```


## ⭐️ What is BOM?
BOM allows programming languages to interact with the browser. 

📝 **Example**
```
alert("Showing a message in the browser");

setTimeout(  
    function(){  
        console.log("I will print this message after 2 sec has passed.")
    },2000);  

// screen height and width

console.log("Screen height is" + screen.height);

console.log("Screen width is" + screen.width)l

```


## ⭐️ Is JavaScript Synchronous or Asynchronous?

 JavaScript is a synchronous, blocking, single-threaded language. Meaning that only one operation can be executed at a time. 

 ![JSThreadCalling](/Day1/assets/jsCall.png)


Luckily, there are ways to make JS asynchronous, which comes in hand when you don't want to block the user from interacting with the interface while the program is waiting for a function to complete.

```
console.log(1);
console.log(2);
setTimeout(function(){
    console.log(3);
}, 2000)
console.log(4);

```
What do you think will happen? 
The program will print 1,2,3,4? ***No***
SetTimeout is asynchronous, so it will not block the execution. Therefore, the program will print 1,2,4, **(after 2 seconds)** 3. 










