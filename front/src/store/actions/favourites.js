import axios from "axios";
import { ALL_FAVS, ADD_FAV, REMOVE_FAV } from "../constants";

const addFav = (fav) => ({
  type: ADD_FAV,
  fav,
});

const allFavs = (favs) => ({
  type: ALL_FAVS,
  favs,
});

const removeFav = (fav) => ({
  type: REMOVE_FAV,
  fav,
});

export const fetchFavourites = (state) => (dispatch) =>
  axios
    .post(`/api/movies/${state.imdbID}`, state)
    .then((res) => res.data)
    .then((movie) => dispatch(addFav(movie)));

export const fetchAllFavs = () => (dispatch) =>
  axios
    .get(`/api/favs`)
    .then((res) => res.data)
    .then((movies) => dispatch(allFavs(movies)));

export const removeFavourite = (movie) => (dispatch) =>
  axios.post(`/api/favs`, movie).then(() => dispatch(removeFav(movie)));
