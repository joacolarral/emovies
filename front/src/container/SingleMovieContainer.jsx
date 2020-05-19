import { connect } from "react-redux";
import SingleMovie from "../components/SingleMovie";
import { fetchMovieId } from "../store/actions/movies";

const mapStateToProps = (state) => ({
  movie: state.movie.movieSelected,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovieId: (id) => dispatch(fetchMovieId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);
