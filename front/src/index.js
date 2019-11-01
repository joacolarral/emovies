import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Main from "./components/Main";
import store from "./store/store";
/* import { fetchMovie } from "./store/actions/movies"; */

/* const onAppEnter = () => store.dispatch(fetchMovies()); */

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={Main} /* onEnter={onAppEnter} */ />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
