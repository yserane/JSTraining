/*
Hints
1. document.getElementById("id") -> to access an html element
2. document.document.querySelector(`[data-key='${id}']`); --> to access li element with id
3. array.findIndex((value) => condition;)  --> get index from array
4. event.target.parentElement.dataset.key --> get id for li
*/
let todos = [];

function addByEnter(event){
    if(event.key === 'Enter')
        addNewTask();

}

function addNewTask(){


}

function renderTodo(todo) {
}
function toggleDone(id) {

  
}

function deleteTask(id) {
}

const list = document.querySelector('.js-todo-list');
list.addEventListener('click' ,(event)=> {
    event.preventDefault();
    }); 
