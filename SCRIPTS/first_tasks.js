'use strict '

const NumberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); 

const personalMovieDB = {           // СОЗДАЛИ ОБЬЕКТ
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {       // СОЗДАЛИ ЦИКЛ - выполняется 2 раза
    const a = prompt('Какой последний фильм смотрели?', ''),
          b = prompt('На сколько оцените?', '');

    if (a != null && b != null && a !='' && b !='' && a.length < 51) {      
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i --;                       // ПОВТОР, ЕСЛИ не соблюдаются условия выше!
    }
}

//  УСЛОВИЯ отображения сообщения при вводе количества фильмов 
if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >=10 && personalMovieDB.count < 30 ) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >=30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);