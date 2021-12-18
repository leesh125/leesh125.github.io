const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    console.log(toDos);
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    console.log(li.id); // 삭제하기전 해당하는 li의 id(date.now) 얻기
    li.remove();
}

function paintToDo(newTodo){ // newTodo는 이제 객체이다
    const li = document.createElement("li");
    li.id = newTodo.id; // li의 id를 설정한 object의 id(date.now())로 설정한다.
    const span = document.createElement("span");
    span.innerText = newTodo.text;  // newtodo 객체의 text를 가져옴
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
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);  // newtodoobj객체를 배열에 값으로
    paintToDo(newTodoObj);   // painttodo함수의 전달인수를 객체로 전달(이전에는 text였음)
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

// JSON.stringify()로 배열형태의 문자열인 toDos를 가지고온다 ( "["a","b"]" ")
const savedToDos = localStorage.getItem(TODOS_KEY);


if(savedToDos !== null) {
    // 배열형태의 문자열을 parse() 를 통해 배열로 만들어준다
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}