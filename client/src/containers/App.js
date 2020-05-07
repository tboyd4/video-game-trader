// dependency imports
import React, { useState } from "react";
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
import Cart from '../components/pages/cartPage/cartPage';

// utility imports
import GameContext from "../utils/GameContext";
import Pic1 from "../images/test-img.jpg";
import Pic2 from "../images/dis-pic.jpg";
import Pic3 from "../images/resi-pic.jpg";

// class component
function App() {
  const [gameState, setGameState] = useState({
    testData: [
      {
        title: "Game1",
        released: "2001",
        image: Pic1,
        price: 15,
      },
      {
        title: "Game2",
        released: "2005",
        image: Pic2,
        price: 45,
      },
      {
        title: "Game3",
        released: "2011",
        image: Pic3,
        price: 16,
      },
    ],
    userCart: [],
  });

  function addToCart () {
    console.log(gameState.userCart);
    let addedGame = {
      title: "Game3",
        released: "2011",
        image: Pic3,
        price: 16,
    }
    gameState.userCart.push(addedGame)
    setGameState({
      ...gameState
    });
    console.log(gameState.userCart);
  }

  return (
    <div className="container">
      <GameContext.Provider value={gameState}>
        <BrowserRouter>
          <HeadBar />
          <Switch>
            <Route exact path="/" component={(props) => <Login {...props} />} />
            <Route
              exact
              path="/register"
              component={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/home"
              component={(props) => <Home {...props} addCart={addToCart} />}
            />
            <Route
              exact
              path="/buysell"
              component={(props) => <BuySell {...props} />}
            />
            <Route
              exact
              path="/user"
              component={(props) => <User {...props} />}
            />
            <Route
              exact
              path="/cart"
              component={(props) => <Cart {...props} />}
            />
          </Switch>
        </BrowserRouter>
      </GameContext.Provider>

      <div className="filler"></div>

      <FootBar />
    </div>
  );
}

export default App;
