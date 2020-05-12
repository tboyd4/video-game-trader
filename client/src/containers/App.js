// dependency imports
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// component imports
import Home from "../components/pages/homePage/home";
import BuySell from "../components/pages/buysellPage/buySellPage";
import Login from "../components/pages/authenticationPages/login";
import Register from "../components/pages/authenticationPages/register";
import FootBar from "../components/appWide/footer/footBar";
import HeadBar from "../components/appWide/header/headBar";
import Cart from "../components/pages/cartPage/cartPage";

// utility imports
import GameContext from "../utils/GameContext";
import Pic1 from "../images/test-img.jpg";
import Pic2 from "../images/dis-pic.jpg";
import Pic3 from "../images/resi-pic.jpg";
import M from 'materialize-css';

// class component
function App() {
  const [gameState, setGameState] = useState({
    testData: [
      {
        id: 1,
        title: "Game1",
        released: "2001",
        image: Pic1,
        price: 15,
      },
      {
        id: 2,
        title: "Game2",
        released: "2005",
        image: Pic2,
        price: 45,
      },
      {
        id: 3,
        title: "Game3",
        released: "2011",
        image: Pic3,
        price: 16,
      },
    ],
    userCart: [],
  });

  function addToCart(game) {
    console.log(JSON.stringify(game));
    gameState.userCart.push(game);
    setGameState({
      ...gameState,
    });
    M.toast({html: 'Added to Cart!'})
  }

  function removeFromCart(event) {
    let idRemove = event.target.dataset.tag;
    let newCart = gameState.userCart.filter((game) => game.id != idRemove);
    setGameState({
      ...gameState,
      userCart: newCart,
    });
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
              path="/cart"
              component={(props) => (
                <Cart {...props} removeCart={removeFromCart} />
              )}
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
