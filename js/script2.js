/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'), 
          addInput = addForm.querySelector('input.adding__input'),
          addCheckBox = addForm.querySelector('input[type="checkbox"]');
    

    
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newMovie = addInput.value;
        const isFavourite = addCheckBox.checked;

        if (!newMovie) {
            return;
        }
    
        if (newMovie.length > 21) { 
            // newMovie = newMovie.slice(0, 21) + '...';
            newMovie = `${newMovie.substring(0, 22)}...`;
        } 
    
        if (isFavourite) { 
            console.log('Add this movie to your favourite');
        }
    
        movieDB.movies.push(newMovie); 

        createMovieList(movieDB.movies, movieList); 

        event.target.reset();
    });


    const deleteAdv = (arr) => {
        arr.forEach(item => item.remove());
    }; 
    
    const makeChanges = () => {
        genre.textContent = 'драма'; 

        poster.style.backgroundImage = 'url("../img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };  
    
    function createMovieList(films, parent) {
        parent.innerHTML = ''; 

        sortArr(films); 

        films.forEach((film, i) => {
            // movieList.insertAdjacentHTML('beforeend', `<li class="promo__interactive-item">${i+1} ${film}
            //         <div class="delete"></div>
            //     </li>`);
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>`;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', (ev) => {
                ev.preventDefault(); 
                btn.parentElement.remove();
                films.splice(i, 1); 

                createMovieList(films, parent);
            }); 
        });
    }
    
    // function addMovieEvent() {
    //     movieList.querySelectorAll('.delete').forEach(element => {
    //         element.addEventListener('click', (ev) => {
    //             ev.preventDefault();
    //             // console.log(ev);
    //             let deleteMovieName = element.parentElement.textContent.trim();
    //             deleteMovieName = deleteMovieName.substr(2, deleteMovieName.length-2); 
    //             const deleteMoviePos = movieDB.movies.indexOf(deleteMovieName); 
    //             movieDB.movies.splice(deleteMoviePos, 1);
    //             element.parentElement.remove();
    //             console.log(ev.target);
    //         }); 
    //     });
    // }

    

    deleteAdv(adv); 
    makeChanges();  
    createMovieList(movieDB.movies, movieList); 
    
    
    
});






