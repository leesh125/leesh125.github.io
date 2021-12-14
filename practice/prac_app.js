// # Variable
// var a = 4;    var은 예전 방식, let과 같이 변수값 수정 가능
// const = 상수(변하지않음), let = 변수(변할 수 있음)

// true false null=비어있음 undefined=변수는 있지만 값이 없다

// # Array
// const daysOfWeek = ["mon" , "tue" , "wed" , "thu", "fri", "sat", "sun"];
// console.log(daysOfWeek);
// console.log(daysOfWeek[1]) // ==> "tue"
// daysOfWeek.push("sun");  // list(array)에 값을 추가
// console.log(daysOfWeek);

// # Object
// const player = { // 어떤것인자 앞에 설명을 붙이기 위해 objects 가 쓰인다
//     name: "lee",
//     points: 10,
//     fat: false
// };
// console.log(player);
// console.log(player.name);
// console.log(player["name"]);

// object 안에 값을 바꾸기
// player.fat = true; 
// player.points += 15; // player.points = player.points + 15;

// object 안에 값을 추가하기
// player.lastName = "sh";

// console.log(player);

// # Function
// function sayHello(name, age){
//     console.log("Hello My name is " + name +" and my age is " + age);
// }

// sayHello("lee", 17);
// sayHello("kim", 22);
// sayHello("park", 31);

// function plus(a,b) {
//     console.log(a + b);
// }

// function divide(a,b) {
//     console.log(a / b);
// }
// function minus(a,b) {
//     console.log(a - b);
// }
// function mul(a,b) {
//     console.log(a * b);
// }
// plus(8 ,24);
// divide(8 ,24);
// minus(8 ,24);
// mul(8 ,24);

// const player = {
//     name: "lee",
//     sayHello2: function (other) {
//         console.log("hello! " + other + " nice to meet you!!");
//     },
// };

// console.log(player.name);
// player.sayHello2("kim");

// # Make Calculator!
// const calculator = {
//     add: function (a,b){
//         return a + b;
//     },
//     minus: function (a,b){
//         return a - b;
//     },
//     time: function (a,b){
//         return a * b;
//     },
//     divide: function (a,b){
//         return a / b;
//     },
//     pow: function (a,b){
//         return a ** b;
//     },
// };

// const plusResult = calculator.add(2,5); // 변수에 return 값 대입
// console.log(plusResult); // 7

// const minusResult = calculator.minus(plusResult,5); // 7 - 5 == 2
// console.log(minusResult); // 2

// const timeResult = calculator.time(plusResult, minusReuslt);  // 7 * 2 = 14
// console.log(timeResult); // 14

// const divideResult = calculator.divide(timeResult, minusReuslt);  // 7 / 2 = 3.5
// console.log(divideResult); // 3.5

// const powResult = calculator.pow(timeResult, minusReuslt);  // 7 * 2 = 49
// console.log(powResult); // 49

// # return
// const age = 96;
// function calculateKrAge(age) {
//     return age + 2;
// }

// const krAge = calculateKrAge(96);

// console.log(krAge);

// Conditionals (if)
// const age = parseInt(prompt("How old are you")); // prompt(사용자의 입력을 받는 창을 띄움)

// console.log(typeof age, age);


// if (isNaN(age) || age < 0) {  // isNaN() : 숫자가 아닌 것을 true | false로 반환(Not a Number)
//     console.log("Please write a real positive number");
// } else if(age < 18){
//     console.log("You are too young");
// } else if (age >= 18 && age <= 50) {
//     console.log("You can drink");
// } else if (age > 50 && age <= 80) {
//     console.log("You should exercise");
// } else if ( age === 100){ // = : 값만 비교 , === : 값, 유형까지 비교
//     console.log("WOW");
// } else if (age > 80) {
//     console.log("You can do wgatever you want.");
// } 

// document id
// document.title
// const title_id = document.getElementById("title_id");

// console.dir(title_id);

// title_id.innerText = "Got you!";

// console.log(title_id.id);

// ## document class 
// const title_class = document.getElementsByClassName("title_class");
// console.dir(title_class);
// console.log(title_id.className);

// ## document querySelector // 하나만 가져옴
// ## document querySelectorAll // 다 가져옴
// const title = document.querySelector(".hello h1");
// const title = document.querySelectorAll(".hello h1");

// 밑에 두개는 동일
// const title = document.querySelector("#hello");
// const title = document.getElementById("hello");

// const title = document.querySelector(".hello:first-child h1");
// console.log(title);
// title.innerText = "123";

// ## document style
// const title = document.querySelector(".hello:first-child h1");
// title.style.color = "blue";

// ## document addEventListener click mouseover mouseleave
// const h1 = document.querySelector(".hello:first-child h1");

// function handleTitleClick() {
//     h1.style.color = "blue";
// }
// title.addEventListener("click", handleTitleClick); // ()을 써주면 곧바로 실행이 되버림(이벤트가 안먹힘)
// h1.addEventListener("click", function () {
//     console.log("hello");
// });

// function handleMouseEnter() {
//     h1.innerText = "mouse is here";
// }
// // mouseover는 직접 이벤트를 걸지않은 자식요소에 마우스 포인터가 와도 발생 
// // mouseenter는 오로지 자기 자신에게 마우스 포인터가 와야만 발생합니다.
// h1.addEventListener("mouseenter", handleMouseEnter);

// function handleMouseLeave() {
//     h1.innerText = "mouse is gone";
// }

// h1.addEventListener("mouseleave", handleMouseLeave);

// // ## EventListener 없이 이벤트 사용하는 법(함수사용)
// h1.onclick = handleTitleClick;

// // ## document addEventListener window 함수
// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }
// window.addEventListener("resize", handleWindowResize);


// function handleWindowCopy() {
//     alert("copier!");
// }
// window.addEventListener("copy", handleWindowCopy);


// function handleWindowOffline() {
//     alert("SOS no WIFI");
// }
// window.addEventListener("offline", handleWindowOffline);

// function handleWindowOnline() {
//     alert("Wifi On");
// }
// window.addEventListener("online", handleWindowOnline);


// ## eventListener에 조건문 걸기
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     const currentColor = h1.style.color;
//     let newColor;

//     if (currentColor === "blue") {
//         newColor = "tomato";
//     }else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);

// ## 자바스크립트로 class 추가 밑 삭제
// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {
//     // const clickedClass = "clicked";
//     // ## h1 class가 없는 상태
//     // if(h1.className === clickedClass){
//     //     h1.className = "";
//     // }else{
//     //     h1.className = clickedClass;
//     // }

//     // ## 1. 기존 h1 class가 있는 상태
//     // if(h1.classList.contains(clickedClass)){
//     //     h1.classList.remove(clickedClass);
//     // }else{
//     //     h1.classList.add(clickedClass);
//     // }

//     // ## 2. 기존 h1 class가 있는 상태 (toggle 사용)
//     // toggle은 h1의 classList에 clicked class가 있는지 확인해서
//     // 있다면 삭제, 없으면 추가
//     h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", handleTitleClick);