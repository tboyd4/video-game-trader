import React, { Component } from "react";
import "./authenticationPages.css";
import { Link } from "react-router-dom";
import { register } from "./userFunctions";

const emailRegect = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({
  formErrors,
  firstName,
  lastName,
  userName,
  email,
  password,
}) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach((val) => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(firstName, lastName, userName, email, password).forEach(
    (val) => {
      val === null && (valid = false);
    }
  );

  return valid;
};

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      formTouched: false,
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      formErrors: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    if (formValid(this.state)) {
      const newUser = {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        userName: this.state.userName,
        email: this.state.email,
        password: this.state.password,
      };

      register(newUser).then((res) => {
        this.props.history.push("/home");
      });

      console.log(`--SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
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
      case "firstName":
        formErrors.firstName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegect.test(value)
          ? ""
          : "invalid email address";
        break;
      case "userName":
        formErrors.userName =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
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
      <main className="verticleHeight2">
      <div className="row" id="login-mod">
        <div className="col s3"></div>
        <div className="col s6 center-align">
          <div className="card">
            <div className="black-text center-align">
              <h3>Register</h3>
            </div>

            <form onSubmit={this.handleSubmit} noValidate>
              <div className="card-content">
                <div className="form-field">
                  <label htmlFor="firstName">First Name</label> */}
                  <input
                    className={formErrors.firstName.length > 0 ? "error" : null}
                    placeholder="Enter your First Name"
                    style={{ color: "black" }}
                    type="text"
                    name="firstName"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.firstName.length > 0 && (
                    <span className="errorMessage">{formErrors.firstName}</span>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className={formErrors.lastName.length > 0 ? "error" : null}
                    placeholder="Enter your Last Name"
                    type="text"
                    name="lastName"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.lastName.length > 0 && (
                    <span className="errorMessage">{formErrors.lastName}</span>
                  )}
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    className={formErrors.email.length > 0 ? "error" : null}
                    placeholder="Enter your Email"
                    type="email"
                    name="email"
                    noValidate
                    onChange={this.handleChange}
                  />
                  {formErrors.email.length > 0 && (
                    <span className="errorMessage">{formErrors.email}</span>
                  )}
                </div>

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
                    Register
                  </button>
                </div>
                <Link
                  to="/"
                  className="FormField__Link center-align"
                  style={{ color: "black", padding: "1rem" }}
                >
                  <p>Or click here to Login to your account</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className="col s3"></div>
      </div>
      </main>
    );
  }
}

export default Register;
