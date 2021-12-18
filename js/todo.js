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

function sexyFilter(item) {
    // return true; // 1,2,3,4가 그대로 보존
    // return false; // 배열에서 1,2,3,4 제외 => 빈배열이 됨

    // item이 3이 아니면 true리턴 => 3은 배열에서 제외 ([1,2,4])
    return item !== 3;
}

// filter가 함수를 4번부름(인자가 바뀜(1,2,3,4 순서))
// filter함수에서 sexyfilter 함수를 실행할때 해당 인자가 true면 그대로 배열에 남고 false면 배열에서 제외
[1,2,3,4].filter(sexyFilter) 

function aafilter(num) { return num > 2 }
arr.filter(aafilter) // [3]


const todos = [{"text":"asd","id":1639819772729},{"text":"qwe","id":16398}];
function sexyfilter(todo) { return todo.id !== 1639819772729 }
todos.filter(sexyfilter) // {text: 'qwe', id: 16398}