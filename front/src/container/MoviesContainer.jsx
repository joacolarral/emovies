import React from "react";
import { connect } from "react-redux";
import { fetchMovieTitle } from "../store/actions/movies";
import Movies from "../components/Movies";
import Pagination from "../components/Pagination";

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, selectedPage: 1 };
  }

  componentDidMount() {
    if (!Object.keys(this.props.movies).length) {
      return this.props.history.push("/");
    }
    this.setState({ isLoading: false });
  }

  render() {
    return this.state.isLoading ? (
      ""
    ) : (
      <div>
        <Movies movies={this.props.movies} />
        <Pagination
          results={this.props.movies.totalResults}
          selectedPage={this.state.selectedPage}
          fetchMovieTitle={this.props.fetchMovieTitle}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ movie }) => ({
  movies: movie.movies,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieTitle: (movie, page) => dispatch(fetchMovieTitle(movie, page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesContainer);
