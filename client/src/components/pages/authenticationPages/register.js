//import React from "react";
import React, { Component } from "react";
// import "./authenticationPages.css";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      password: "",
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // This checks the name
  handleNameChange(e) {
    console.log(e.target.value);

    this.setState({
      name: e.target.value,
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
    // let target = e.target;
    // let value = target.type === "checkbox" ? target.checked : target.value;
    // let name = target.name;

    this.setState({
      password: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <form className="FormFields" onSubmit={this.handleSubmit}>
            <div className="input-field">
              <label for="email">First and Last Name</label>
              <input
                type="text"
                id="name"
                className="label-field"
                placeholder="Enter your full name"
                name="name"
                value={this.state.name}
                onChange={this.handleNameChange}
                style={{ color: "white" }}
              />
            </div>
            <div className="input-field">
              <label for="email">E-Mail Address</label>
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
              <label className="FormField__Label" htmlFor="password">
                Password
              </label>
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
              <button className="FormField__Button mr-20">Sign In</button>{" "}
              <Link to="/" className="FormField__Link">
                Create an account
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
