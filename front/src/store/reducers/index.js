import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import moviesReducer from "../reducers/moviesReducer";

export default combineReducers({
  user: userReducer,
  movie: moviesReducer,
});
