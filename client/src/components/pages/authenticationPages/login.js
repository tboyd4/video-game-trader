//import React from "react";
import React, { Component } from "react";
// import "./authenticationPages.css";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // This checks the email address
  handleEmailChange(e) {
    console.log(e.target.value);

    this.setState({
      email: e.target.value,
    });
  }

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
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>
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
      </div>
    );
  }
}

export default Login;
