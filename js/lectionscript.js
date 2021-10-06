"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'green'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();

//деструктуризация
const {border, bg} = options.colors;
console.log(border);

//console.log(Object.keys(options).length);
// console.log(options.name);

// delete options.name;
// console.log(options);

//для обьектов используем for in, так как он не итерируется
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`[Option ${i} has value ${options[key][i]}]`);
//             counter++;
//         }
//     } else {
//         console.log(`Option ${key} has value ${options[key]}`);
//         counter++;
//     }
// }

// console.log(counter);
