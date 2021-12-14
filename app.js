const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) { // submit 이벤트가 발생할 때 필요한 정보들을 담은 object
    event.preventDefault(); // 기본 동작을 실행하지 못하게 막기
    // console.log(event); // 이 이벤트는 submitEvent의 object이다
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
    greeting.innerText = "hello " + username;
    // 변수명과 다른 기본형 자료를 함께 쓰고 싶다면
    // ``(백틱, 탭 위에)를 사용하고 ${변수명} 이렇게 작성해야함
    greeting.innerText = `Hello ${username}`; 
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit); // 브라우저는 함수 호출 시 기본적으로 인자를 담아서 호출한다.



// 링크를 타고 넘어가는걸 막아줌
// function handleLinkClick(event) { 
//     event.preventDefault();
//     console.log(event);
// }
// link.addEventListener("click", handleLinkClick);

