let students = [
    {   id: Math.random(),
        name: "Mairna",

    },
    {   id: Math.random(),
        name: "Leyan",
        
    },
    {   id: Math.random(),
        name: "Randa",
        
    },
    {   id: Math.random(),
        name: "Ruba",
        
    },
    {   id: Math.random(),
        name: "Hadi",
        
    }]
let list = document.getElementById("my-list");

students.forEach((student)=> {
    let li = document.createElement("li");
    li.innerText = student.name;
    li.setAttribute('data-key', student.id);
    list.appendChild(li);
  });


  function deleteStudent(event){
    if(event.key === 'Enter')
        deleteStudentByName();

    }

    function deleteStudentByName(){
        // find the student in the list
        // find the student element using const li = document.querySelector(`[data-key='${foundStudent.id}']`);
        // remove from DOM using li.remove();
        // alert if the user was not found. 

        let studentName = document.getElementById("student-name").value;

    }





