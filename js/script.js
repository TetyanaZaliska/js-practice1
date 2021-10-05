/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many films do you already watch?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many films do you already watch?', '');
    }
}
 

//start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const askQuestion = prompt('One of last wached movies?', ''),
              rate = prompt('How can you rate it?', ''); 
    
        if ((askQuestion !== '') && (askQuestion !== null) && (askQuestion.length <= 50) &&
            (rate !== '') && (rate !== null)) {
            personalMovieDB.movies[askQuestion] = rate;
        } else {
            i--;
        } 
    }
}

//rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Watched to small movies'); 
    } else if ((personalMovieDB.count <= 30) && (personalMovieDB.count >= 10)) {
        console.log('You are a classic viewer'); 
    } else if (personalMovieDB.count > 30) {
        console.log('You are a movie fan');
    } else {
        console.log('Error occured');
    }
}

//detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.private) {
        return ;
    }
    console.log(personalMovieDB);
}

showMyDB();

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Your favorite genre is ${ i+1 }`, '');
        if (personalMovieDB.genres[i] == '' || personalMovieDB.genres[i] == null) { 
            i--;
        }
    }
}

writeYourGenres();

