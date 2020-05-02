import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "../components/home/home";
import BuySell from "../components/buysellPage/buySellPage";
import User from "../components/userPage/userPage";
import Login from "../components/authenticationPages/login";

function App() {
  return (
    <div className="App">
      <h1>Hello. I will someday become a video game trader</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
              <li>
                <Link to="/buysell">Buy/Sell</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/buysell">
              <BuySell />
            </Route>
            <Route path="/user">
              <User />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
