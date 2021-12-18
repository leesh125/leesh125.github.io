const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault(); 
    const newTodo = todoInput.value();  // 입력한 문자열을 저장
    todoInput.value = ""; 
}

todoForm.addEventListener("submit", handleToDoSubmit);