'use strict'



let num = 20;

function showFirstMessage(text) {
    console.log(text)
    let num = 10;
    console.log(num);
}
showFirstMessage('Hello World');
console.log(num);


function calc(a, b) {
    return (a + b); 
}
console.log(calc(5, 2));
console.log(calc(3, 2))


function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log("Hello!")
}; 
logger();

const kalk = (a,b) => {
    console.log('1');
    return a * b;
};
console.log(kalk(3, 2))

function showFirstMessage (qq) {
    console.log(qq)
    let num = 20;
}
showFirstMessage('HW');
console.log(num);

function calc(a, b) {
    return (a + b); 
    console.log('hhww');
}
console.log(calc(5, 2));
console.log(calc(3, 2))




const answers = [];
answers[0] = prompt('Как ваше Имя?', '');
answers[1] = prompt('Как ваше Фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');
console.log(answers);