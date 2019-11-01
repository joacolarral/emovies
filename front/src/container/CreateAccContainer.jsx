import React from "react";
import store from "../store/store";
import CreateAccount from "../components/CreateAccount";
import { connect } from "react-redux";
import { registerUser } from "../store/actions/user";

class CreateAccContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUser(evt) {
    this.setState({
      username: evt.target.value
    });
  }
  handleChangePass(evt) {
    this.setState({
      password: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    store
      .dispatch(registerUser(this.state))
      .then(() => this.props.history.push("/"));
  }

  render() {
    return (
      <CreateAccount
        handleChangeUser={this.handleChangeUser}
        handleChangePass={this.handleChangePass}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default connect()(CreateAccContainer);
