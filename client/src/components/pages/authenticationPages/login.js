import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserAPI from "../../../utils/UserAPI";
import { login } from "./userFunctions";
import './authenticationPages.css'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      userName: "",
      password: "",
    };

    this.handleuserNameChange = this.handleuserNameChange.bind(this);
    this.handlePWChange = this.handlePWChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // This checks the email address
  handleuserNameChange(e) {
    console.log(e.target.value);

    this.setState({
      userName: e.target.value,
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

    const user = {
      userName: this.state.userName,
      password: this.state.password,
    };

    login(user).then((res) => {
      this.props.history.push(`/login`);
    });
  }

  render() {
    return (
      <div className="row" id="login-mod">
        <div className="col s3"></div>
        <div className="col s6 center-align">
          <div className="card">
            <div className="black-text center-align">
              <h3>Login</h3>
            </div>

            <form onSubmit={this.handleSubmit} noValidate>
              <div className="card-content">
                <div className="form-field">
                  <label htmlFor="userName">User Name</label>
                  <input
                    //className={formErrors.userName.length > 0 ? "error" : null}
                    placeholder="Enter your User Name"
                    type="text"
                    name="userName"
                    noValidate
                    onChange={this.handleuserNameChange}
                  />
                  {/* {formErrors.userName.length > 0 && (
                    <span className="errorMessage">{formErrors.userName}</span>
                  )} */}
                </div>

                <div className="form-field">
                  <label htmlFor="password">Password</label>
                  <input
                    // className={formErrors.password.length > 0 ? "error" : null}
                    placeholder="Enter your Password"
                    type="password"
                    name="password"
                    noValidate
                    onChange={this.handlePWChange}
                  />
                  {/* {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )} */}
                </div>

                <div className="form-field" style={{ padding: "1rem" }}>
                  <button
                    className="btn-large green accent-3 .center-align"
                    style={{ width: "100%", color: "black" }}
                  >
                    Login
                  </button>
                </div>
                <Link
                  to="/register"
                  className="FormField__Link center-align"
                  style={{ color: "black", padding: "1rem" }}
                >
                  <p>Or click here to Register for an account</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="col s3"></div>
      </div>
    );
  }
}

export default Login;
