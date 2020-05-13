//import React from "react";
import React, { Component } from "react";
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
        <div className="col s12 m4 l2"></div>
        <div
          className="col s12 m4 l8"
          style={{
            marginTop: "3rem",
            borderstyle: "6",
            borderWidth: "1rem",
            borderColor: "#eeeeee",
          }}
        >
          <div className="FormCenter">
            <form className="FormFields" onSubmit={this.handleSubmit}>
              <h4 className="center-align" style={{ padding: "1rem" }}>
                Sign In
              </h4>
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
                  }}
                >
                  Sign In
                </button>{" "}
                <Link
                  to="/register"
                  className="FormField__Link"
                  style={{ color: "white" }}
                >
                  <p>Or click to Create an account</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="col s12 m4 l2"></div>
      </div>
    );
  }
}

export default Login;
