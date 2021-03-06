import axios from "axios";
import { RECEIVE_MOVIE, RECEIVE_MOVIES } from "../constants";

const receiveMovieTitle = (movies) => ({
  type: RECEIVE_MOVIES,
  movies,
});

const receiveMovieId = (movie) => ({
  type: RECEIVE_MOVIE,
  movie,
});

export const fetchMovieId = (movieId) => (dispatch) =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&i=${movieId}&plot=full`)
    .then((res) => res.data)
    .then((movie) => dispatch(receiveMovieId(movie)));

export const fetchMovieTitle = (movie, i = 1) => (dispatch) =>
  axios
    .get(`https://www.omdbapi.com/?apikey=20dac387&s=${movie}&page=${i}`)
    .then((res) => res.data)
    .then((movies) => dispatch(receiveMovieTitle(movies)));
