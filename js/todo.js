const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

const toDos = [];

function saveToDos() {
    console.log(toDos);
     // toDos (리스트)객체를 문자열로 변환시킨다.
     // 이유 : localstorage 에서 값을 불러오기 위해
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
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

// JSON.stringify()로 배열형태의 문자열인 toDos를 가지고온다 ( "["a","b"]" ")
const savedToDos = localStorage.getItem(TODOS_KEY);

function say(item) {
    console.log("say" ,item);
}

if(saveToDos) {
    // 배열형태의 문자열을 parse() 를 통해 배열로 만들어준다
    const parsedToDos = JSON.parse(savedToDos);
    // parseToDos 리스트가 가지고 있는 원소에 say 함수를 실행
    // 원소가 3개있으면 3번 실행 
    // 밑에 두개는 동일한 코드 (1번 함수 씀, 2번 함수 안씀(화살표 함수 씀))
    parsedToDos.forEach(say);
    parsedToDos.forEach((item) => console.log("say", item));
    
}