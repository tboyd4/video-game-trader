import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { logout } from "../../../components/pages/authenticationPages/userFunctions";
import API from "../../../utils/GamesAPI.js";
import "./headBar.css";

// function centaurBalance() {
//   let loggedUserId = localStorage.getItem("usertoken");
//   if (loggedUserId) {
//     API.getMoney(loggedUserId)
//       .then((result) => {
//         let balance;
//         if (result.data.centaurs === null) {
//           balance = 0;
//         } else {
//           console.log(result.data.centaurs);
//           balance = result.data.centaurs;
//         }
//         console.log(balance);
//         return balance;
//       })
//       .catch((err) => console.log(err));
//   } else {
//     console.log(0);
//     return 0;
//   }
// }

async function balance() {
  let loggedUserId = localStorage.getItem("usertoken");
  console.log(localStorage.getItem("usertoken"));
  console.log("loggedUserId", loggedUserId);
  console.log(balance);
  return !loggedUserId ? 0 : await API.getMoney(loggedUserId);
}

function HeadBar() {
  function logOut() {
    alert("You are logging out!");
    logout();
    localStorage.clear();
  }

  //let centaurs = balance();
  // console.log(centaurs);

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
              Centaur Balance:{balance}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default HeadBar;
