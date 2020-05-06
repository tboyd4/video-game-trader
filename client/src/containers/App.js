import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from "../components/home/home";
import BuySell from "../components/buysellPage/buySellPage";
import User from "../components/userPage/userPage";
import Login from "../components/authenticationPages/login";
import FootBar from "../components/appWide/footer/footBar";
import HeadBar from "../components/appWide/header/headBar";

class App extends React.Component {
  render() {
    return (

      <div className="container">
        
          <BrowserRouter>
            <HeadBar>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/buysell" component={BuySell} />
              <Route exact path="/user" component={User} />
            </Switch>
            </HeadBar>
          </BrowserRouter>

          <div className="filler"></div>
        
        <FootBar />
      </div>
    );
  }
}

export default App;
