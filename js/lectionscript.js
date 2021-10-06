"use strict";

//псевдомассивы не имеют методов push, pop, forEach и тд..

const arr = [1, 12, 3, 16, 8];

//arr.sort((a, b) => a - b);
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// arr[99] = 0;
// //arr.length - длина массива состоит из последнего индекса плюс один 
// //- в данном случае 100
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} in this array: ${arr}`);
// });

// // arr.pop();
// // arr.push(10);
// // arr.shift();
// // arr.unshift(0);

// // console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// for (let value of arr) {
//     console.log(value);
// }


// //отличие forEach от for of - во втором варианте мы можем использовать 
// //ключевые слова break и continue


// const str = prompt('Products divided by ", "', '');
// //разделяет строку в массив
// const products = str.split(', ');
// console.log(products);

// //собирает строку из массива
// console.log(products.join(': '));

// //изначально метод sort сортирует все как строки (даже числа превращает в строку и сортирует)
// console.log(products.sort());
