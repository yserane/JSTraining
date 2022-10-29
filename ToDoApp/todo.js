//this is the working code for todo

let todos = [];

function addByEnter(event){
    if(event.key === 'Enter')
        addNewTask();

}

function addNewTask(){
    let addedTaskHTML = document.getElementById("new-task")
    let addedTask = addedTaskHTML.value;
    if (addedTask != null && addedTask != '') {
        let newTask = {
        task:addedTask,
        id: Math.random(),
        isChecked: false
        }

        todos.push(newTask);
        addedTaskHTML.value = '';
        renderTodo(newTask);
    }

}

function renderTodo(todo) {

    const list = document.querySelector('.js-todo-list');    
    const isChecked = todo.checked ? 'done': '';
    const node = document.createElement("li");
    node.setAttribute('class', `todo-item ${isChecked}`);
    node.setAttribute('data-key', todo.id);
    node.innerHTML = `
      <input id="${todo.id}" type="checkbox"/>
      <label for="${todo.id}" class="tick js-tick"></label>
      <span>${todo.task}</span>
      <button class="delete-todo js-delete-todo">
      <i class="fa fa-trash delete" aria-hidden="true"></i>
      </button>
    `;
  
    list.append(node);
    return list;
}
function toggleDone(id) {
    const index = todos.findIndex((item) => item.id == id);
    todos[index].checked = !todos[index].checked;
    const item = document.querySelector(`[data-key='${id}']`);

    todos[index].checked? 
    item.classList.add("done"): item.classList.remove("done");
  
}

function deleteTask(id) {
    const index = todos.findIndex(item => item.id == id);
    const length = todos.length;
    let temp = todos[length-1];
    todos[index] = temp;
    todos.pop();
    //Remove from dom;
    const item = document.querySelector(`[data-key='${id}']`);
    item.remove();
}

const list = document.querySelector('.js-todo-list');
list.addEventListener('click' ,(event)=> {
    event.preventDefault();
    let id = event.target.parentElement.dataset.key;
    let classList = event.target.classList;
    if(classList.contains("tick")) { // this is for mark as done
        toggleDone(id);
    } else if (classList.contains("delete")) {
       id =  event.target.parentNode.parentElement.dataset.key;
        deleteTask(id);
    }

    }); 
