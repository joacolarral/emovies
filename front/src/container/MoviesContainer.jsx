import { connect } from "react-redux";
import Movies from "../components/Movies";

const mapStateToProps = ({ movies }) => ({
  movies: movies.list
});

export default connect(mapStateToProps)(Movies);
