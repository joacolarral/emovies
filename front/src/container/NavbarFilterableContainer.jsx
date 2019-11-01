import React from "react";
import { connect } from "react-redux";
import { fetchMovies } from "../store/actions/movies";
import { Link } from "react-router-dom";
import { fetchUser, logOut } from "../store/actions/user";

class NavbarFilterableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      inputValue: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchMovies(this.state.inputValue);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="navbar-brand" href="#">
          OMBD
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="thumbnail" to={`/`}>
                <div className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </div>
              </Link>
            </li>
            {this.props.user ? (
              <li className="nav-item active">
                <Link className="thumbnail" to={`/`}>
                  <div className="nav-link" href="#">
                    Hello {this.props.user.username}{" "}
                    <span className="sr-only">(current)</span>
                  </div>
                </Link>
              </li>
            ) : (
              <li className="nav-item active">
                <Link className="thumbnail" to={`/login`}>
                  <div className="nav-link" href="#">
                    Log In <span className="sr-only">(current)</span>
                  </div>
                </Link>
              </li>
            )}
            {this.props.user ? (
              <li className="nav-item active">
                <Link className="thumbnail" to={`/`}>
                  <div
                    onClick={this.props.logOut}
                    className="nav-link"
                    href="#"
                  >
                    Logout <span className="sr-only">(current)</span>
                  </div>
                </Link>
              </li>
            ) : (
              <li className="nav-item active">
                <Link className="thumbnail" to={`/createaccount`}>
                  <div className="nav-link" href="#">
                    Create account <span className="sr-only">(current)</span>
                  </div>
                </Link>
              </li>
            )}
          </ul>
          <Link className="thumbnail" to={`/favs`}>
            <div className="nav-link" href="#">
              Favourite <span className="sr-only">(current)</span>
            </div>
          </Link>
          <form
            onSubmit={this.handleSubmit}
            className="form-group"
            style={{ marginTop: "20px" }}
          >
            <input
              className="form-control"
              value={this.state.value}
              placeholder="Enter a movie"
              onChange={this.handleChange}
            />
          </form>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ movies, user }) => ({
  movies,
  user
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: movies => dispatch(fetchMovies(movies)),
  fetchUser: () => dispatch(fetchUser()),
  logOut: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarFilterableContainer);
