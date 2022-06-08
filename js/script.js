'use strict '

function sayHello() {
    console.log('Hello!');
}
sayHello();


const arr = [1, 5, 2, 71, 53, 24],
      sorted = arr.sort(compareNum);


function compareNum(a, b) {
    return a - b;
}

console.log(sorted); 


