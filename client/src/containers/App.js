import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from '../components/home/home';
import BuySell from '../components/buysellPage/buySellPage';
import User from '../components/userPage/userPage';
import Login from '../components/authenticationPages/login';

function App() {
  return (
    <div className="App">
      <h1>Hello. I will someday become a video game trader</h1>
      <Router>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          <Route path="/user">
            <User />
          </Route>
          <Route path="/buysell">
            <BuySell />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
