'use strict';

const btn = document.querySelector('button'),
      btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = () => {
//     alert('click');
// };

// btn.onclick = () => {
//     alert('second click');
// };

// let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 2) {
    //     btn.removeEventListener('click', deleteElement);
    // }
    // // e.target.remove();
};

// btn.addEventListener('mouseenter', deleteElement, {once: true});
btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);
// btn.removeEventListener('click', deleteElement);

// btn.addEventListener('click', () => {
//     console.log('second click');
// });

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event.target);
});


btns.forEach(btn => {
    btn.addEventListener('click', deleteElement);
});

// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild); // текстовая нода тоже может попасть
// console.log(document.body.firstElementChild); // только элементы без переводов строк
// console.log(document.body.lastChild);

// console.log(document.querySelector('#btn').parentNode);
// console.log(document.querySelector('#btn').parentElement);
 
console.log(document.querySelector('[data-current="3"]').nextElementSibling);
console.log(document.querySelector('[data-current="3"]').previousElementSibling);
console.log(document.querySelector('[data-current="3"]').nextSibling);
console.log(document.querySelector('[data-current="3"]').previousSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }

//     console.log(node);
// }