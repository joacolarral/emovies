import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
/* import { fetchMovies } from "../store/actions/movies";
import { fetchUser, logOut } from "../store/actions/user"; */
import NavbarFilterable from "./NavbarFilterable";

class NavbarFilterableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      bgColor: false,
      appearNav: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.prev = window.scrollY;
    window.addEventListener("scroll", this.handleScroll);
  }

  handleScroll(e) {
    const actualScroll = e.currentTarget;

    if (actualScroll.scrollY > 0) {
      if (this.prev > window.scrollY) {
        this.setState({ appearNav: true, bgColor: true });
      } else if (this.prev < window.scrollY) {
        this.setState({ appearNav: false });
      }
    } else {
      !window.scrollY
        ? this.setState({ bgColor: false })
        : this.setState({ bgColor: true });
    }
    this.prev = actualScroll.scrollY;
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchMovies(this.state.inputValue);
  }

  render() {
    return this.state.appearNav ? (
      <NavbarFilterable
        location={this.props.location.pathname}
        bgColor={this.state.bgColor}
      />
    ) : (
      ""
    );
  }
}

const mapStateToProps = ({ movies, user }) => ({
  movies,
  user,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: (movies) => dispatch(fetchMovies(movies)),
  fetchUser: () => dispatch(fetchUser()),
  logOut: () => dispatch(logOut()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(NavbarFilterableContainer)
);
