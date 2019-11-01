import axios from "axios";

const receiveMovies = movies => ({
  type: "RECEIVE_MOVIES",
  movies
});

const receiveMovie = movie => ({
  type: "RECEIVE_MOVIE",
  movie
});

export const fetchMovie = movie => dispatch =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&i=${movie}`)
    .then(res => res.data)
    .then(movie => dispatch(receiveMovie(movie)));

export const fetchMovies = movies => dispatch =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&s=${movies}`)
    .then(res => res.data)
    .then(movies => dispatch(receiveMovies(movies.Search)));
