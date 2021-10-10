'use strict';

// const box = document.getElementById('box');

// console.log(box);

// const btns = document.getElementsByTagName('button');
// const btn = document.getElementsByTagName('button')[1];
// const btn2 = btns[0];
// console.log(btns);


// const circles = document.getElementsByClassName('circle');
// const circle = document.getElementsByClassName('circle')[0];
// const circle2 = circles[2];
// console.log(circles[0]);


// const hearts = document.querySelectorAll('.heart');

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);


const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');


//console.dir(box);
// box.style.backgroundColor = 'green';
// box.style.width = '500px';

const num = 100;
box.style.cssText = `background: green; width: ${num}px;`;

btns[1].style.borderRadius = '100%';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'green';
});

const div = document.createElement('div');
// const text = document.createTextNode('Text for site');

div.classList.add('black');

// document.body.append(div);
wrapper.append(div);
// //старый appendChild
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// //более старый, теперь новые - prepend, before, after
// wrapper.insertBefore(div, hearts[1]);



// circles[0].remove();
//  btns[0].remove();
// btns[1].style.backgroundColor = 'red';
// wrapper.removeChild(hearts[1]);


// circles[0].style.backgroundColor = 'red';
// hearts[0].replaceWith(circles[0]);
// //старый метод: removeChild
// wrapper.removeChild(hearts[0], circles[0]);

div.innerHTML = '<h1>Hello world</h1>';
// div.textContent = '<h1>Hello world</h1>';

// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>Bie</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>Bie</h2>');
div.insertAdjacentHTML('afterend', '<h2>Bie</h2>');