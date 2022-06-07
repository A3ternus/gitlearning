'use strict '

const personalMovieDB = { // СОЗДАЛИ ОБЬЕКТ
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) { // СОЗДАЛИ ЦИКЛ - выполняется 2 раза
            const a = prompt('Какой последний фильм смотрели?', ''),
                b = prompt('На сколько оцените?', '');
    
            if (a != null && b != null && a != '' && b != '' && a.length < 51) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--; // ПОВТОР, ЕСЛИ не соблюдаются условия выше!
            }
        }
    },
    detectPersonalLevel: function() {
        //  УСЛОВИЯ отображения сообщения при вводе количества фильмов 
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <=3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`, '');
             
            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вообще');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item})`);
        });
        
    }   
};
