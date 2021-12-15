const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${second}`;
    
}

// setTimeout - 인자로 준 ms 만큼 기다렸다가 한번만 실행
getClock();
setInterval(getClock, 1000);


// ## padstart , end
// "1".padStart(2,"0");
// '01'
// "12".padStart(2, "0");
// '12'
// "1".padEnd(2,"0");
// '10'
// "hello".padStart(20, "x");
// 'xxxxxxxxxxxxxxxhello'