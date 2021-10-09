'use strict';

// 1) +
let x = 5;
//alert( x++ );
console.log(x++);

// 2) +
console.log(typeof([ ] + false - null + true) );

// 3) +
let y = 1; 
let c = y = 2; 
//alert(c); 
console.log(c);

// 4) -
console.log([ ] + 1 + 2);

// 5) +
//alert( "1"[0] );
console.log( "1"[0] );

// 6) -
//возвращает последнее несоответствие
console.log(2 && 1 && null && 0 && undefined);

// 7) +
let a = 14;
let b = '20';
//всегда преобразование в булевый тип два знака !!
console.log( !!( a && b ) );
//вернет последнее несоответствие или последнее значение из цепочки
console.log( ( a && b ) ); 

// 8) +
//alert( null || 2 && 3 || 4 ); 
console.log( null || 2 && 3 || 4 ); 

// 9) +
a = [1, 2, 3]; 
b = [1, 2, 3]; 
//не равно так как обьекты по ссылке не равны 
console.log( a == b ); 

// 10) +
//alert( +"Infinity" ); 
console.log( +"Infinity" );

// 11) -+
console.log("Ёжик" > "яблоко");

// 12) +
console.log(0 || "" || 2 || undefined || true || falsе );