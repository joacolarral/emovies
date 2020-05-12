import { LOG_IN, ALL_FAVS, ADD_FAV, REMOVE_FAV } from "../constants";

const initialState = {
  user: {},
  favourite: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, user: action.user };
    case ADD_FAV:
      return Object.assign({}, state, {
        favourite: [...state.favourite, action.fav],
      });
    case ALL_FAVS:
      return Object.assign({}, state, { favourite: action.favs });
    case REMOVE_FAV:
      return Object.assign({}, state, {
        favourite: [
          ...state.favourite.filter((fav) => console.log(fav) !== action.fav),
        ],
      });
    default:
      return state;
  }
};
