import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../store/actions/user";
import HomeContainer from "../container/HomeContainer";
import NavbarFilterableContainer from "../container/NavbarFilterableContainer";
import MovieContainer from "../container/MovieContainer";
import MoviesContainer from "../container/MoviesContainer";
import CreateAccContainer from "../container/CreateAccContainer";
import LoginContainer from "../container/LoginContainer";
import FavsContainer from "../container/FavsContainer";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  /*   componentDidMount() {
    this.props.fetchUser();
  } */

  render() {
    console.log(this.props);
    return (
      <div>
        <NavbarFilterableContainer />
        <Switch>
          <Route exact path="/" component={HomeContainer} />
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
