/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};



// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
const adv = document.querySelectorAll('div.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => item.remove());

// adv.forEach(item => {
//     item.remove();
// });

// adv.forEach(function(item) {
//     item.remove();
// });

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
genre.textContent = 'драма';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS
// poster.style.background = 'url(../img/bg.jpg) center center/cover no-repeat'; 
poster.style.backgroundImage = 'url("../img/bg.jpg")';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 
// 5) Добавить нумерацию выведенных фильмов
 
movieList.innerHTML = '';

movieDB.movies.sort().forEach((film, i) => {
    // movieList.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${i+1} ${film}
    //         <div class="delete"></div>
    //     </li>`);
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>`;
});
