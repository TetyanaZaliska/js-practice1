/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

"use strict";

const numberOfFilms = +prompt("How many films do you already watch?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const askQuestion1 = prompt("One of last wached movies?", ""),
      rate1 = +prompt("How can you rate it?", ""),
      askQuestion2 = prompt("One of last wached movies?", ""),
      rate2 = +prompt("How can you rate it?", "");

personalMovieDB.movies[askQuestion1] = rate1;
personalMovieDB.movies[askQuestion2] = rate2;
// personalMovieDB.movies = {
//     askQuestion1: rate1,
//     askQuestion2: rate2
// };

console.log(personalMovieDB);