import React, { Component } from "react";
import "./authenticationPages.css";
import { Link } from "react-router-dom";
import { login } from "./userFunctions";

const formValid = ({ formErrors, userName, password }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(userName, password).forEach((val) => {
    val === null && (valid = false);
  });

  return valid;
};

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formTouched: false,
      loggedIn: false,
      userName: "",
      password: "",
      formErrors: {
        userName: "",
        password: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      const user = {
        userName: this.state.userName,
        password: this.state.password,
      };

      login(user).then((res, err) => {
        console.log(res.err);
        // if (res.err === undefined) {
        //   console.log("user doesnt exist");
        //   var popup = document.getElementById("popup");
        //   popup.innerText = "User name doesnt exist ";
        // } else {
        //   this.props.history.push("/home");
        //   console.log("does exist");
        // }
        this.props.history.push("/home");
      });

      console.log(`--LOGGING IN--
        User Name: ${this.state.userName}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "userName":
        formErrors.userName =
          value.length === 0 ? "please enter your user name" : "";
        break;
      case "password":
        formErrors.password =
          value.length === 0 ? "please enter your password" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value, formTouched: true }, () =>
      console.log(this.state)
    );
  };

  render() {
    const { formErrors, formTouched } = this.state;

    return (
      <div className="row" id="login-mod">
        <div className="col s3"></div>
        <div className="col s6 center-align">
          <div className="card">
            <div className="black-text center-align">
              <h3>Login</h3>
            </div>
            <div>
              <p id="popup" style={{ color: "red" }}></p>
            </div>
            <form onSubmit={this.handleSubmit} noValidate>
              <div className="card-content">
                <div className="form-field">
                  <label htmlFor="userName">User Name</label>
                  <input
                    className={formErrors.userName.length > 0 ? "error" : null}
                    placeholder="User Name for your account"
                    type="text"
                    name="userName"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.userName.length > 0 && (
                    <span className="errorMessage">{formErrors.userName}</span>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="password">Password</label>
                  <input
                    className={formErrors.password.length > 0 ? "error" : null}
                    placeholder="Password for your account"
                    type="password"
                    name="password"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.password.length > 0 && (
                    <span className="errorMessage">{formErrors.password}</span>
                  )}
                </div>

                <div className="form-field" style={{ padding: "1rem" }}>
                  <button
                    disabled={!formTouched}
                    className="btn-large green accent-3 .center-align"
                    style={{ width: "100%", color: "black" }}
                  >
                    LOGIN
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
