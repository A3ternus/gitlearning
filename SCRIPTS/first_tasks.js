'use strict '

//1
const NumberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: NumberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Какой последний фильм смотрели?', ''),
      b = prompt('На сколько оцените?', ''), 
      c = prompt('Какой последний фильм смотрели?', ''),
      d = prompt('На сколько оцените?', '');
 
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);