import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../components/home/home";
import BuySell from "../components/buysellPage/buySellPage";
import User from "../components/userPage/userPage";
import Login from "../components/authenticationPages/login";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <h1>Hello. I will someday become a video game trader</h1>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/buysell" component={BuySell} />
              <Route exact path="/user" component={User} />
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
