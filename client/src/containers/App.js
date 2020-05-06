// dependency imports
import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// component imports
import Home from "../components/pages/homePage/home";
import BuySell from "../components/pages/buysellPage/buySellPage";
import User from "../components/pages/userPage/userPage";
import Login from "../components/pages/authenticationPages/login";
import Register from "../components/pages/authenticationPages/register";
import FootBar from "../components/appWide/footer/footBar";
import HeadBar from "../components/appWide/header/headBar";

// class component
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <HeadBar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/buysell" component={BuySell} />
            <Route exact path="/user" component={User} />
          </Switch>
        </BrowserRouter>

        <div className="filler"></div>

        <FootBar />
      </div>
    );
  }
}

export default App;
