"use strict";

let num = 10;

//Function Declaration
function showFirstMessage(text) {
    console.log(text);
    let num = 20;
    console.log(num);
}

showFirstMessage('Hello world!');
console.log(num);

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function calc(a, b) {
//     return (a + b);
// }

function ret() {
    let num = 15;
    return num; 
}

const anotherNum = ret();
console.log(anotherNum);

//Function Expression
const logger = function() {
    console.log('Hello');
};

logger();

//Стрелочные функции
const calc = (a, b) => a + b;
//const calc = (a, b) => { 
//    console.log('1');
//    return a + b; 
//}
//const double = a => a * 2;