import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../components/pages/authenticationPages/userFunctions";
import API from "../../../utils/GamesAPI.js";
import "./headBar.css";
import M from "materialize-css";

function HeadBar() {
  function logOut() {
    M.toast({ html: "You have logged out!" });
    logout();
    localStorage.clear();
  }

  const [centaurState, setCentaurState] = useState({
    centaurs: 0,
  });

  useEffect(() => {
    let loggedUserId = localStorage.getItem("usertoken");
    API.getMoney(loggedUserId.toString())
      .then((res) => {
        setCentaurState({ ...centaurState, centaurs: res.data });
      })
      .catch((err) => console.log(err));
  }, []);

  function toast() {
    M.toast({ html: `You have ${centaurState.centaurs} Centaurs` });
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
            <li
              className="black-text"
              style={{
                marginRight: "12px",
                marginLeft: "12px",
                paddingRight: "12px",
              }}
              id="centaur"
            >
              <a className="black-text" onClick={toast}>
                Check Balance
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeadBar;
