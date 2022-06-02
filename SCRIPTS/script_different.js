'use strict'

// function first() {
//     // do som
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();



// function message() {
//     setTimeout(function() {
//         console.log('Hello JS');
//     }, 1000)
// }

// function message2() {
//     console.log('Hey Man!');
// }

// message();
// message2();


// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошёл этот урок');
// }

// learnJS('JavaScript', done);


// function min(a, b) {
//     if (a > b) {
//         return b;
//     } else {
//         return a;
//     }
// }
// console.log(min(3, 5));

// function min(a,b) {
//     if (a > b) {
//         return b;
//     } else {
//         return a;
//     } 
// }
// console.log(min(-10, 5));


// function showMessage(author, text) {
//     author = '~' + author
//     console.log(author + ':', text);
// }
// showMessage('Alex', 'Hey')


// function sendMessage (from, text) {
//     console.log(from + ': ' + text);
// }
// sendMessage('Cat', 'ha-ha')

// const str = 'heLLo!';
// const arr = [1, 2, 3];

// console.log(str.toUpperCase()); 
// console.log(str.toLowerCase()); 

// console.log(str);

// const fruit = 'Some fruit';

// console.log(fruit.indexOf('fruit'));

// const logg = 'Hello world';

// console.log(logg.slice(-6, -1))


// let test = 'Privet Mister';
// console.log(test.substr(6, 6));

// const num3 = 12.3;
// console.log(Math.round(num3));

// const xxx = '12.2px';
// console.log(parseInt(xxx));
// console.log(parseFloat(xxx));

// let userName = 'Вася';

// function showMessage() {
//      userName = 'Moron';
//   let message = 'Привет, ' + userName;
//   console.log(message);
// }

// showMessage(); // Привет, Вася


// function name (test) {
//     let ask = prompt('Как оно?', 'Zbs')
//     console.log('Hello!');
// }
// name();


// function learnJS (lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я провёл урок!');
// }

// learnJS('JavaScript', done);

// function name (name1) {
//     console.log('Hello!');
// }
// name1();

// let num = 20;

// function showFirstMessage(text) {
//     console.log(text)
//     let num = 10;
//     console.log(num);
// }
// showFirstMessage('Hello World');
// console.log(num);


// function calc(a, b) {
//     return (a + b); 
// }
// console.log(calc(5, 2));
// console.log(calc(3, 2))


// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);


// const logger = function() {
//     console.log("Hello!")
// }; 
// logger();

// const kalk = (a,b) => {
//     console.log('1');
//     return a * b;
// };
// console.log(kalk(3, 2))

// function showFirstMessage (qq) {
//     console.log(qq)
//     let num = 20;
// }
// showFirstMessage('HW');
// console.log(num);

// function calc(a, b) {
//     return (a + b); 
//     console.log('hhww');
// }
// console.log(calc(5, 2));
// console.log(calc(3, 2))




// const answers = [];
// answers[0] = prompt('Как ваше Имя?', '');
// answers[1] = prompt('Как ваше Фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');
// console.log(answers);