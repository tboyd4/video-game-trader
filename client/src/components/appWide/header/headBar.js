import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../components/pages/authenticationPages/userFunctions";

import "./headBar.css";
// import Logo from '../../../images/proj3log.png';

function HeadBar() {
  // let checkUser = false;

  // useEffect(() => {
  //   let localCheck = localStorage.getItem('usertoken');
  //   if (localCheck) {
  //     checkUser = true;
  //   }
  // }, []);

  function logOut() {
    alert("You are logging out!");
    logout();
    localStorage.clear();
  }

  return (
    <header>
      <nav>
        <div className="nav-wrapper green accent-3">
          <a href="/home" className="brand-logo black-text" id="header-title">
            Centaur Game Trading
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <Link className="black-text" to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className="black-text" to="/buysell">
                Sell
              </Link>
            </li>
            <li>
              <Link className="black-text" to="/cart">
                Cart
              </Link>
            </li>
            <li>
              <Link className="black-text" to="/">
                Login
              </Link>
            </li>
            <li>
              <a href="/" onClick={logOut} className="black-text">
                Logout
              </a>
            </li>
            <li>
              <p>CENTAURS</p>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeadBar;
