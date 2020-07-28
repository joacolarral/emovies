import { connect } from "react-redux";
import Favs from "./Favs";
import { removeFavourite } from "../../store/actions/favourites";

const mapStateToProps = (state) => ({
  favs: state.favourite,
  user: state.user,
});

const madDispatchToProps = (dispatch) => ({
  removeFavourite: (movie) => dispatch(removeFavourite(movie)),
});

export default connect(mapStateToProps, madDispatchToProps)(Favs);
