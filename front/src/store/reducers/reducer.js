const initialState = {
  movies: [],
  movieSelected: {},
  user: {},
  favourite: []
};

export default (state = initialState, action) => {
  console.log("-----");
  switch (action.type) {
    case "RECEIVE_MOVIE":
      return { ...state, movieSelected: action.movie };
    case "RECEIVE_MOVIES":
      return Object.assign({}, state, { movies: action.movies });
    case "RECEIVE_USER":
      return { ...state, user: action.user };
    case "ADD_FAV":
      return Object.assign({}, state, {
        favourite: [...state.favourite, action.fav]
      });
    case "ALL_FAVS":
      return Object.assign({}, state, { favourite: action.favs });
    case "REMOVE_FAV":
      return Object.assign({}, state, {
        favourite: [
          ...state.favourite.filter(fav => console.log(fav) !== action.fav)
        ]
      });
    default:
      return state;
  }
};
