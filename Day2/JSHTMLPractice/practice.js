//get element by id
// get element by tag name
// get element by classname
// get value in a span
// change color of the text in the span
// hide.show an element on click
// add to dom
// add eventlistener to element
//remove from dom 

document.getElementById("span-id-1").innerHTML = "MY name is";

let spanText = document.getElementById("span-id-1").innerHTML;
let spanTags = document.getElementsByTagName("span");
// console.log(s)
if (spanText.includes("a")) 
    document.getElementsByClassName("span-class-1")[0].style.color= "red";
else 
    document.getElementsByClassName("span-class-1")[0].style.color= "blue";

    document.getElementById("span-id-1").style.fontSize = "40px";


    document.getElementById("span-id-1").addEventListener("click", (e)=> console.log(e));
    document.getElementById("span-id-1").click = function(event){

    }

    document.getElementById("span-id-1").click = ()=> console.log();
    

    function toggleMe(event) {
        let p = document.getElementById("p-1");
        
        if (p.style.display === "none") {
            p.style.display = "block";
          } else {
            p.style.display = "none";
          }

    }

    let newInputHTML = document.createElement("input");
    newInputHTML.setAttribute("type", "text");
    newInputHTML.setAttribute("id", "input-1");
    newInputHTML.addEventListener("keydown", function(event){
        alert(event.key);
    })
    document.getElementsByClassName("container")[0].appendChild(newInputHTML);



    removeFromDom = () => {
        let p = document.getElementById("p-2");
        p.remove();
    }






1. //get text of span with id
// add a texy to the second span
// change the color to red
function toggleMe(event) {
    let pHTML = document.getElementsByTagName("p")[0];
    pHTML.style.display == "none"?
     pHTML.style.display="block":
     pHTML.style.display="none";

     let input = document.createElement("input");
     input.setAttribute("type", "text");
     let container = document.getElementById("main-dev");
     input.addEventListener("click", (event) => console.log(event));
     input.click = function(){
        
     };
     container.appendChild(input);

    
}

