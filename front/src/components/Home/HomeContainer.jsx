import React from "react";
import Home from "./Home";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchMovieTitle, fetchMovieId } from "../../store/actions/movies";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const movieTrim = this.state.movie.trim();
    const movieSplit = [
      movieTrim.substring(0, 2),
      parseInt(movieTrim.substring(2)),
    ];

    if (movieSplit[0] === "tt" && typeof movieSplit[1] === "number") {
      console.log();
      this.props
        .fetchMovieId(movieSplit.join(""))
        .then(() => this.props.history.push("/movies"));
    } else {
      this.props
        .fetchMovieTitle(movieTrim)
        .then(() => this.props.history.push(`/movies?s=${movieTrim}`));
    }
  }

  render() {
    return (
      <Home handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchMovieId: (movieId) => dispatch(fetchMovieId(movieId)),
  fetchMovieTitle: (movieTitle) => dispatch(fetchMovieTitle(movieTitle)),
});

export default connect(null, mapDispatchToProps)(HomeContainer);
