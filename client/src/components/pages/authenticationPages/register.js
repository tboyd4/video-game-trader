//import React from "react";
import React, { Component } from "react";
//import "./authenticationPages.css";
import { Link } from "react-router-dom";
import UserAPI from "../../../utils/UserAPI";
import { register } from "./userFunctions";
//import userFunctions from "./userFunctions";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
    };

    this.handlefirstNameChange = this.handlefirstNameChange.bind(this);
    this.handlelastNameChange = this.handlelastNameChange.bind(this);
    this.handleuserNameChange = this.handleuserNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // This checks the name
  handlefirstNameChange(e) {
    console.log(e.target.value);
    this.setState({
      firstName: e.target.value,
    });
  }

  handlelastNameChange(e) {
    console.log(e.target.value);
    this.setState({
      lastName: e.target.value,
    });
  }

  handleuserNameChange(e) {
    console.log(e.target.value);
    this.setState({
      userName: e.target.value,
    });
  }

  // This checks the email address
  handleEmailChange(e) {
    console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  }

  // This checks the password
  handlePWChange(e) {
    console.log(e.target.value);

    this.setState({
      password: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("The form was submitted with the following data:");
    console.log(this.state);

    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password,
    };

    register(newUser).then((res) => {
      this.props.history.push(`/login`);
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m4 l2"></div>
        <div
          className="col s12 m4 l8"
          style={{
            marginTop: "3rem",
          }}
        >
          <form className="FormFields" onSubmit={this.handleSubmit}>
            <h4 className="center-align" style={{ padding: "1rem" }}>
              Register
            </h4>
            <div className="input-field">
              <input
                type="text"
                id="firstName"
                className="label-field"
                placeholder="Enter your first name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handlefirstNameChange}
                style={{ color: "white" }}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                id="lastName"
                className="label-field"
                placeholder="Enter your last name"
                name="name"
                value={this.state.lastName}
                onChange={this.handlelastNameChange}
                style={{ color: "white" }}
              />
            </div>
            <div className="input-field">
              <input
                type="text"
                id="userName"
                className="label-field"
                placeholder="Enter a user name"
                name="name"
                value={this.state.userName}
                onChange={this.handleuserNameChange}
                style={{ color: "white" }}
              />
            </div>

            <div className="input-field">
              <input
                type="email"
                id="email"
                className="label-field"
                placeholder="Enter your email"
                name="email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                style={{ color: "white" }}
              />
            </div>

            <div className="FormField">
              <input
                type="password"
                id="password"
                className="FormField__Input"
                placeholder="Enter your password"
                name="password"
                value={this.state.password}
                style={{ color: "white" }}
                onChange={this.handlePWChange}
              />
            </div>

            <div className="FormField">
              <button
                className="FormField__Button mr-20"
                style={{
                  padding: "12px",
                  marginRight: "3rem",
                  color: "00e676",
                }}
              >
                Create Account
              </button>{" "}
              <Link
                to="/"
                className="FormField__Link"
                style={{ color: "white" }}
              >
                <p>Or click to Sign In to your account</p>
              </Link>
            </div>
          </form>
        </div>
        <div className="col s12 m4 l2"></div>
      </div>
    );
  }
}

export default Login;
