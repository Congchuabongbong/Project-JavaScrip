//**Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');
//**Event listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('change', filterTodo);
//**Functions
function addTodo(e) {
    e.preventDefault();
    if (!todoInput.value) {
        alert('Please enter todo!');
        return;
    }
    //** Create todo div here:
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //** Create LI here:
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //**  Add Todo to localStorage
    saveLocalTodos(todoInput.value);
    //** Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    //** Check Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //** Append To List
    todoList.appendChild(todoDiv);
    //** Clear and focus Input when completed insert todo into list
    todoInput.value = '';
    todoInput.focus();
}
function deleteCheck(e) {
    //** Delete Todo
    if (e.target.classList.contains('trash-btn')) {
        const todo = e.target.parentNode;
        todo.classList.add('fall');
        removeLocalTodos(todo);
        //**add event listener when transition finishes!
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }
    //** Mark Todo
    if (e.target.classList.contains('complete-btn')) {
        const todo = e.target.parentNode;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach((todo) => {
        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}

function saveLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if (localStorage.getItem('todos') == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach((todo) => {
        //** Create todo div here:
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //** Create LI here:
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        //** Check Mark Button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fa-solid fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);
        //** Check Trash Button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
        //** Append To List
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem('todos') == null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoValue = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoValue), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}
