const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";



//링크를 타고 넘어가는걸 막아줌
function handleLinkClick(event) { 
    event.preventDefault();
    console.log(event);
}
link.addEventListener("click", handleLinkClick);

