/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
'Просмотрено довольно мало фильмов', если от 10 до 30 - 'Вы классический зритель', а если больше - 
'Вы киноман'. А если не подошло ни к одному варианту - 'Произошла ошибка'

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

const numberOfFilms = +prompt('How many films do you already watch?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let askQuestion1 = prompt('One of last wached movies?', ''),
      rate1 = +prompt('How can you rate it?', ''),
      askQuestion2 = prompt('One of last wached movies?', ''),
      rate2 = +prompt('How can you rate it?', '');

personalMovieDB.movies[askQuestion1] = rate1;
personalMovieDB.movies[askQuestion2] = rate2;
// personalMovieDB.movies = {
//     askQuestion1: rate1,
//     askQuestion2: rate2
// };

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

let i = 0;

while (i < 2) {
    const askQuestion = prompt('One of last wached movies?', ''),
          rate = prompt('How can you rate it?', ''); 

    if ((askQuestion !== '') && (askQuestion !== null) && (askQuestion.length <= 50) &&
        (rate !== '') && (rate !== null)) {
        personalMovieDB.movies[askQuestion] = rate;
        i++;
    } 
}

//let i = 0;

do {
    const askQuestion = prompt('One of last wached movies?', ''),
          rate = prompt('How can you rate it?', ''); 

    if ((askQuestion !== '') && (askQuestion !== null) && (askQuestion.length <= 50) &&
        (rate !== '') && (rate !== null)) {
        personalMovieDB.movies[askQuestion] = rate;
        i++;
    } 
}
while (i < 2);


// let askQuestion;
// let rate;

// for (let i = 0; i < 2; i++) {
//     let askQuestion = prompt('One of last wached movies?', ''),
//         rate = +prompt('How can you rate it?', '');

//     while (true) {
//         if ((askQuestion !== '') && (askQuestion !== null) && (askQuestion.length <= 50) &&
//             (rate !== '') && (rate !== null)) {
//             break;
//         } 
//         askQuestion = prompt('One of last wached movies?', '');
//         rate = +prompt('How can you rate it?', '');
//     }
//     personalMovieDB.movies[askQuestion] = rate;
// }

// for (let i = 0; i < 2; i++) {
//     do {
//         askQuestion = prompt('One of last wached movies?', '');
//         if ((askQuestion !== '')&&(askQuestion !== null)&&(askQuestion.length <= 50)) {
//             break;
//         } 
//     } 
//     while (true);
//     rate = +prompt('How can you rate it?', '');
//     personalMovieDB.movies[askQuestion] = rate;
// }

// for (let i = 0; i < 2; i++) {
//     for (;true;) {
//         askQuestion = prompt('One of last wached movies?', '');
//         if ((askQuestion !== '')&&(askQuestion !== null)&&(askQuestion.length <= 50)) {
//             break;
//         } 
//     } 
//     rate = +prompt('How can you rate it?', '');
//     personalMovieDB.movies[askQuestion] = rate;
// }

if (personalMovieDB.count < 10) {
    console.log('Watched to small movies'); 
} else if ((personalMovieDB.count <= 30) && (personalMovieDB.count >= 10)) {
    console.log('You are a classic viewer'); 
} else if (personalMovieDB.count > 30) {
    console.log('You are a movie fan');
} else {
    console.log('Error occured');
}

console.log(personalMovieDB);