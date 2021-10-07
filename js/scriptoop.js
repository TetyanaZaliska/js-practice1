'use strict';

const str = 'some';
const strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier);

// const jonh = {
//     health: 100
// };

// //jonh.__proto__ = soldier;
// Object.setPrototypeOf(jonh, soldier);

console.log(jonh);
console.log(jonh.armor);
jonh.sayHello();