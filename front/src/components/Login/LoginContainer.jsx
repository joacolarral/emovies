import React from "react";
import Login from "./Login";
import { connect } from "react-redux";
import { logInUser } from "../../store/actions/user";
import store from "../../store/store";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUser(evt) {
    this.setState({
      username: evt.target.value,
    });
  }
  handleChangePass(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    store
      .dispatch(logInUser(this.state))
      .then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <Login
        handleChangeUser={this.handleChangeUser}
        handleChangePass={this.handleChangePass}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect()(LoginContainer);
