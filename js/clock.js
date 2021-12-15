const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();

    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// setTimeout - 인자로 준 ms 만큼 기다렸다가 한번만 실행
getClock();
setInterval(getClock, 1000);





// new Date()
// Wed Dec 15 2021 18:06:18 GMT+0900 (한국 표준시)
// const date = new Date();
// undefined
// date.getDate()
// 15
// date.getDay()
// 3
// date.getYear()
// 121
// date.getFullYear()
// 2021
// date.getHours()
// 18
// date.getMinutes()
// 6
// date.getSeconds()
// 41
// new Date().getHours()
// 18
// new Date().getMinutes()
// 8
// new Date().getSeconds()
// 26
// new Date().getSeconds()
// 26
// new Date().getSeconds()
// 27
// new Date().getSeconds()
// 29
// new Date().getSeconds()
// 30