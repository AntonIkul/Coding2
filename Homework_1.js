const numberOFilms = +prompt('Сколько фильмов вы посмотрели?','');

const personalMovie = {
    count: numberOFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?",""),
      b = prompt("На сколько оцените его?",""),
      c = prompt("Один из последних просмотренных фильмов?",""),
      d = prompt("На сколько оцените его?","");

      personalMovie.movies [a]=b;
      personalMovie.movies [c]=d;

      console.log(personalMovie);