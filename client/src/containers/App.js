// dependency imports
import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// component imports
import Home from "../components/pages/homePage/home";
import BuySell from "../components/pages/buysellPage/buySellPage";
import User from "../components/pages/userPage/userPage";
import Login from "../components/pages/authenticationPages/login";
import FootBar from "../components/appWide/footer/footBar";

// class component
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <header>
          <h1>Hello. I will someday become a video game trader</h1>
        </header>
          {/* Router will set to a page component. All other components will be placed into those page components */}
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
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
