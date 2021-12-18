const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const toDos = [];

function saveToDos() {
    console.log(toDos);
     // toDos (리스트)객체를 문자열로 변환시킨다.
     // 이유 : localstorage 에서 값을 불러오기 위해
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); 
    const newTodo = todoInput.value;  // 입력한 문자열을 저장
    todoInput.value = ""; 
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const player = {
    name: "asd",
}

// 자바스크립트 object, array 뿐만 아니라 자바스크립트 코드 등 어떤것이든간에
// string으로 만들어준다.
JSON.stringify(player);   