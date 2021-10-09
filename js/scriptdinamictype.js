'use strict';

// динамическая типизация
// To String

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2)
console.log(typeof(5 + ''));
console.log(typeof(null + ''));

const num = 5;

// число num перобразовался в строку
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number
// 1)
console.log(typeof(Number('4')));

// 2)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt('15px', 10)));

let answ = +prompt('Hello', '');

// To Boolean

// 1)
// to false:
// 0, '', null, underfined, NaN

let switcher = null;

if (switcher) {
    console.log('Not working...');
}

switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'4444'));