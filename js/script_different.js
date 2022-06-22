'use strict'

// 32 УРОК 

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.lastElementChild);
// console.log(document.lastChild);

// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);


// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }
//     console.log(node);
// }

/* Задания на урок:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

// 2) Изменить жанр фильма, поменять "комедия" на "драма"

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

// 5) Добавить нумерацию выведенных фильмов */

// 'use strict';

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против..."
//     ]
// };

// // const adv = document.getElementsByClassName('promo__adv'); // my code
// // adv[0].remove(); // my code
// // poster.style.cssText = 'background-image: url(img/bg.jpg)'; // my code


// const adv = document.querySelectorAll('.promo__adv img'),
//       poster = document.querySelector('.promo__bg'),
//       genre = poster.querySelector('.promo__genre'),
//       movieList = document.querySelector('.promo__interactive-list');


// adv.forEach(item => {
//     item.remove();
// });

// genre.textContent = 'драма';
// poster.style.backgroundImage =  'url("img/bg.jpg")';

// movieList.innerHTML = '';

// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//         <li class="promo__interactive-item">${i + 1} ${film}
//             <div class="delete"></div>
//         </li>
//     `;
// });


//29 УРОК

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       hearts = document.querySelectorAll('.heart'),
//       oneHeart = document.querySelector('.heart'),
//       wrapper = document.querySelector('.wrapper');

// // box.style.backgroundColor = 'blue';
// // box.style.width = '500px';

// box.style.cssText = 'background-color: blue; width: 500px';

// btns[1].style.borderRadius = '100%'; 
// circles[0].style.backgroundColor = 'red';

// // for (let i = 0; i < hearts.length; i++) {
// //     hearts[i].style.backgroundColor = 'blue';
// // }

// hearts.forEach(item => {
//     item.style.backgroundColor = 'blue';
// });


// const div = document.createElement('div');
// // const text = document.createTextNode('Тут был Я');

// div.classList.add('black');
// document.body.append(div);

// // wrapper.append(div);
// // wrapper.appendChild(div);
// // wrapper.prepend(div);

// // hearts[0].before(div);
// // hearts[0].after(div);
// // wrapper.insertBefore(div, hearts[0]);

// // circles[0].remove();
// // wrapper.removeChild(hearts[1]);

// // hearts[0].replaceWith(circles[0]);
// // wrapper.replaceChild(circles[0], hearts[0]);

// // div.innerHTML = '<h1>Hello World!</h1>';
// // // div.textContent = 'Hello';
// // div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');

//27 УРОК (задачи)

// 1) •	Какое будет выведено значение: let x = 5; alert( x++ ); ?

// let x = 5;
// console.log(x++); // 5 - постфиксный инкремент

// // 2) •	Чему равно такое выражение: [ ] + false - null + true ?
// let x = [ ] + false - null + true;
// console.log(x); // 'NaN'

// console.log([] + false); // 'false' (строка)
// console.log('false' - null);

// 3) •	Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// let y = 1;
// let x = y = 2;   // читать справа налево
// console.log(x);  // 2 

// 4) •	Чему равна сумма [ ] + 1 + 2?
// console.log([] + 1 + 2); // '12' (строка)

// 5) •	Что выведет этот код: alert( "1"[0] )?
// console.log('1'[0]); // обращение по ключу в строке

// 6) •	Чему равно 2 && 1 && null && 0 && undefined ?
// console.log(2 && 1 && null && 0 && undefined); // null - оператор 'И'(&&) всегда возвращает первый false (запинается на лжи) //

// 7) •	Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// console.log(!!( 2 && 5 ) === (2 && 5));  // false - двойное отрицание приводит к типу Boolean (1ч. станет логическим ТД, 2ч. - Number)
// console.log(!!(2 && 5));  // true
// console.log((2 && 5));    // 5

// 8) •	Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
// console.log(null || 2 && 3 || 4);  // ответ: 3 // вернёт первый True ('ИЛИ' запинается на правде)

// 9) •	a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a === b); // false - т.к. хранилища разные, не сравнивается содержимое
// console.log(a[0] === b[0]); // true - сравнивается содержимое

// 10) • Что выведет этот код: alert( +"Infinity" ); ?
// console.log(+"Infinity") // ответ: Infinity (тип Number) - унарный плюс меняет строку в число

// 11) • Верно ли сравнение: "Ёжик" > "яблоко"?
// console.log('Ёжик' > 'яблоко') // false - по таблице Unicode 'я' больше, чем 'Ё'

// 12) • Чему равно 0 || "" || 2 || undefined || true || falsе ?
// console.log(0 || "" || 2 || undefined || true || falsе)

// 26 УРОК
// // To string 

// // 1)
// console.log(typeof(String(null)));
// console.log(typeof(String(5)));

// // 2)
// console.log(typeof(5 + ""));
// console.log(typeof(null + ""));

// const num = 5;

// console.log(`https://vk.com/catalog/${num}`);

// const fontSize = 26 + 'px';

// // To number
// console.log(typeof(Number('5')));
// console.log(typeof(+'5'));
// console.log(parseInt('15px', 10));

// //To boolean 

// // 0, '', null, undefined, NaN - FALSE
// // 1)
// let switcher = null;

// if (switcher) {
//     console.log('Working')
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working')
// }

// // 2)
// console.log(typeof(Boolean('5')));
// //3)

// console.log(typeof(!!'55'));

// УРОК 24 ООП 

// let str = 'some';
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1, 2, 3]); 

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHi: function() {
//         console.log('QQ MAN');
//     }
// };

// const john = Object.create(soldier);
// john.sayHi();

// // const john = {
// //     health: 100
// // };

// // Object.setPrototypeOf(john, soldier);
// // // john.__proto__ = soldier;

// // // console.log(john.armor);

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