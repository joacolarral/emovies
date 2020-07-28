import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Main from "./components/Main";
import store from "./store/store";
import "./components/main.modules.css";
/* import { fetchMovie } from "./store/actions/movies"; */

/* const onAppEnter = () => store.dispatch(fetchMovies()); */

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div id="main">
        <Route path="/" component={Main} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
