'use strict';

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');
const btn = document.getElementsByTagName('button')[1];
const btn2 = btns[2];


const circles = document.getElementsByClassName('circle');
const circle = document.getElementsByClassName('circle')[0];
const circle2 = circles[2];


const hearts = document.querySelectorAll('.heart');

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart);