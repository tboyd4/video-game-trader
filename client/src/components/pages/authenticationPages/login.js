import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from "./userFunctions";
import './authenticationPages.css'

const initialState = {
  userName: "",
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      userNameError: "",
      passwordError: "",
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

  validate = () => {
    let userNameError = "";
    let passwordError = "";

    if (!this.state.userName) {
      userNameError = "user name cannot be blank";
    }
    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }
    if (userNameError || passwordError) {
      this.setState({ userNameError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit(e) {
    e.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState();
      const user = {
        userName: this.state.userName,
        password: this.state.password,
      };

      login(user).then((res) => {
        this.props.history.push("/home");
      });

      console.log("The form was submitted with the following data:");
      console.log(this.state);
    }
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
                    placeholder="Enter your User Name"
                    type="text"
                    name="userName"
                    noValidate
                    onChange={this.handleuserNameChange}
                  />
                  <span className="errorMessage">
                    {this.state.userNameError}
                  </span>
                </div>

                <div className="form-field">
                  <label htmlFor="password">Password</label>
                  <input
                    placeholder="Enter your Password"
                    type="password"
                    name="password"
                    noValidate
                    onChange={this.handlePWChange}
                  />
                  <span className="errorMessage">
                    {this.state.passwordError}
                  </span>
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
