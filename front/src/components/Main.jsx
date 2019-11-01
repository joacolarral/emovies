import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import RouteHook from "react-route-hook";
import Index from "./Index";
import NavbarFilterableContainer from "../container/NavbarFilterableContainer";
import MovieContainer from "../container/MovieContainer";
import store from "../store/store";
import { fetchMovie } from "../store/actions/movies";
import { fetchUser } from "../store/actions/user";
import { fetchFavourites, fetchAllFavs } from "../store/actions/favourites";
import CreateAccContainer from "../container/CreateAccContainer";
import LoginContainer from "../container/LoginContainer";
import { connect } from "react-redux";
import FavsContainer from "../container/FavsContainer";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.onMovieEnter = this.onMovieEnter.bind(this);
    this.onFavsEnter = this.onFavsEnter.bind(this);
  }

  onMovieEnter({ match }) {
    store.dispatch(fetchMovie(match.params.movieid));
  }

  onFavsEnter() {
    store.dispatch(fetchAllFavs());
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div id="main" className="container-fluid">
        <NavbarFilterableContainer />
        <Switch>
          <Route exact path="/" component={Index} />
          <RouteHook
            path="/movies/:movieid"
            component={MovieContainer}
            onEnter={this.onMovieEnter}
          />
          <Route path="/createaccount" component={CreateAccContainer} />
          <Route path="/login" component={LoginContainer} />
          <RouteHook
            path="/favs"
            component={FavsContainer}
            onEnter={this.onFavsEnter}
          />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser())
});

export default connect(
  null,
  mapDispatchToProps
)(Main);
