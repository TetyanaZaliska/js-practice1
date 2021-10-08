/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

 

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('How many films do you already watch?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many films do you already watch?', '');
        } 
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        const thiscount = personalMovieDB.count;

        if (thiscount < 10) {
            console.log('Watched to small movies'); 
        } else if ((thiscount <= 30) && (thiscount >= 10)) {
            console.log('You are a classic viewer'); 
        } else if (thiscount > 30) {
            console.log('You are a movie fan');
        } else {
            console.log('Error occured');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        } 
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.private) {
            personalMovieDB.private = false;
        } else {
            personalMovieDB.private = true;
        } 
    },
    writeYourGenres: function() {
        // for (let i = 0; i < 3; i++) {
        //     let genre = prompt(`Your favorite genre is ${ i+1 }`, '');
            
        //     if (genre == '' || genre == null) { 
        //         console.log('You entered incorrect data or do not entered the at all');
        //         i--; 
        //     } else {
        //         personalMovieDB.genres[i] = genre;
        //     }
        // }
        for (let i = 0; i < 1; i++) {
            let genres = prompt('Your favorite genres through comma ","', '').toLowerCase();
            
            if (genres == '' || genres == null) { 
                console.log('You entered incorrect data or do not entered the at all');
                i--; 
            } else {
                personalMovieDB.genres = genres.split(',');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach((val, index) => {
            console.log(`Favorite genre #${index+1} - это ${val}`);
        });
    }
};

//personalMovieDB.start();
//personalMovieDB.rememberMyFilms();
//personalMovieDB.detectPersonalLevel(); 
//personalMovieDB.showMyDB(personalMovieDB.private);
// // console.log('call showMyDB 1');
// personalMovieDB.toggleVisibleMyDB();
// // console.log('call toggleVisibleMyDB 2');
// // personalMovieDB.showMyDB();
// // console.log('call showMyDB 2');
// // personalMovieDB.toggleVisibleMyDB();
// // console.log('call toggleVisibleMyDB 3');
// // personalMovieDB.showMyDB();
// // console.log('call showMyDB 3');
//personalMovieDB.writeYourGenres();



//rememberMyFilms();



//detectPersonalLevel();



//showMyDB();



//writeYourGenres();

