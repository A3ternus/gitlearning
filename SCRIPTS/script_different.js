'use strict'

// УРОК 22 ПЕРЕДАЧА ПО ССЫЛКЕ, SPREAD

// let a = 5,
//     b = a;
// b = b + 5;
// console.log(b);

// const obj = {  //ссылка
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// поверхностная копия объекта
// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }


// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };


// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10; 

// console.log(numbers);
// console.log(newNumbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add); 
// clone.d = 20;

// console.log(add);
// console.log(clone);


// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
// newArray[0] = 'g'

// console.log(oldArray);
// console.log(newArray);


// const video = ['yt', 'vimeo', 'rt'],
//       blogs = ['wordpress', 'lj', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'fb'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 3, 5];
// log(...num);



// const array = ['a', 'b'];

// const newAarray = [...array];
// newAarray[0] = 't';
// console.log(array);
// console.log(newAarray);


// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q};
// console.log(newObj);

// УРОК 21 МАССИВЫ И ПСЕВДОМАССИВЫ

// // const arr = [3, 21, 5];
// // arr.sort(compareNum); 
// // console.log(arr)

// // function compareNum(a, b) {
// //     return a - b;
// // }




// // // arr.shift();


// // arr.forEach(function(item, i , arr) {
// // console.log(`${i}: ${item} внутри массива ${arr}`)
// // });


// // arr[10] = 0;
// // console.log(arr.length);

// // arr.pop();
// // arr.push(6)




// // console.log(arr)

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i ])
// // }

// // for (let value of arr) {
// //     console.log(value); 
// // }

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));


//20 УРОК ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }


// function first() {
//     // do something     setTimeout(function() {
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