import React from "react";
import { connect } from "react-redux";
import Movies from "../components/Movies";
class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.movies.length) return this.props.history.push("/");
  }

  render() {
    return <Movies movies={this.props.movies} />;
  }
}

const mapStateToProps = ({ movie }) => ({
  movies: movie.movies,
});

export default connect(mapStateToProps)(MoviesContainer);
