import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../store/actions/user";
import HomeContainer from "./Home/HomeContainer";
import NavbarFilterableContainer from "./Navbar/NavbarFilterableContainer";
import MovieContainer from "./Movie/MovieContainer";
import MoviesContainer from "./Movies/MoviesContainer";
import CreateAccContainer from "./CreateAccount/CreateAccContainer";
import LoginContainer from "./Login/LoginContainer";
import FavsContainer from "./Favorites/FavsContainer";
import SingleMovieContainer from "./SingleMovie/SingleMovieContainer";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <NavbarFilterableContainer />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/movies/:id" component={SingleMovieContainer} />
          <Route path="/movies" component={MoviesContainer} />
          <Route path="/createaccount" component={CreateAccContainer} />
          <Route path="/login" component={LoginContainer} />
        </Switch>
      </div>
    );
  }
}

/* const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(fetchUser()),
}); */

export default connect(null, null)(Main);
