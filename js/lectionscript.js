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
//const noParams = () => 5 * 2;

//lesson 14

const str = 'test';
const arr = [1, 2, 4];

//console.log(arr.length);

//console.dir(Number);

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str);

const fruit = 'Some fruitu';
console.log(fruit.indexOf('u'));

const logg = 'Hello world'; //total 10 characters

console.log(logg.slice(6, 10));//вырезать от символа х до символа у
console.log(logg.slice(6));
console.log(logg.slice(-4, -1));

console.log(logg.substring(6, 10)); //как slice, только без отрицательных, можно первый арг больше чем второй

console.log(logg.substr(6, 4));//вырезать с позиции х количество символов нум


const numb = 12.2;
console.log(Math.round(numb));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));

