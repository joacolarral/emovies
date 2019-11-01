import React from "react";
import { connect } from "react-redux";
import Movie from "../components/Movie";
import { fetchFavourites } from "../store/actions/favourites";
import store from "../store/store";

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imbdId: this.props.match.params.id,
      title: this.props.movie.Title,
      poster: this.props.movie.Poster
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(movie) {
    this.props.fetchFavourites(movie);
  }

  render() {
    return <Movie movie={this.props.movie} handleSubmit={this.handleSubmit} />;
  }
}

const mapStateToProps = state => ({
  movie: state.movieSelected
});

const mapDispatchToProps = dispatch => ({
  fetchFavourites: favourite => dispatch(fetchFavourites(favourite))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
