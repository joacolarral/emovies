import React from "react";
import { connect } from "react-redux";
import { fetchMovieTitle } from "../../store/actions/movies";
import Movies from "./Movies";
import queryString from "query-string";
import Spinner from "../Loader/Spinner";
import Pagination from "../Pagination/Pagination";

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bool: false };
    this.changeBool = this.changeBool.bind(this);
  }

  componentDidMount() {
    const parse = queryString.parse(this.props.location.search);

    if (!parse.s) return this.props.history.push("/");
    this.props.fetchMovieTitle(parse.s);
  }

  changeBool() {
    this.setState({ bool: true });
  }

  render() {
    return !this.props.movies.Search ? (
      <Spinner />
    ) : (
      <>
        <Movies movies={this.props.movies.Search} />
        <Pagination
          searchTitle={queryString.parse(this.props.location.search)}
          fetchMovieTitle={this.props.fetchMovieTitle}
          results={this.props.movies.totalResults}
          bool={this.state.bool}
          changeBool={this.changeBool}
        />
      </>
    );
  }
}

const mapStateToProps = ({ movie }) => ({
  movies: movie.movies,
});
const mapDispatchToProps = (dispatch) => ({
  fetchMovieTitle: (movieTitle, page) =>
    dispatch(fetchMovieTitle(movieTitle, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
