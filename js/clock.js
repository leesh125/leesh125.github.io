const clock = document.querySelector("h2#clock");

function sayHello() {
    console.log("hello");
}

// setInterval(함수명, ms) - 특정시간마다 반복적으로 실행이 된다.
setInterval(sayHello, 5000);