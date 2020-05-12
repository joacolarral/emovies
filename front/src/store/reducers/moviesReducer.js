import { RECEIVE_MOVIE, RECEIVE_MOVIES } from "../constants";

const initialState = {
  movies: [],
  movieSelected: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_MOVIE:
      return { ...state, movieSelected: action.movie };
    case RECEIVE_MOVIES:
      return Object.assign({}, state, { movies: action.movies });
    default:
      return state;
  }
};
