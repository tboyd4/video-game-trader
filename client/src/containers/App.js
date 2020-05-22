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
import M from "materialize-css";
import API from "../utils/GamesAPI";

// class component
function App() {
  const [gameState, setGameState] = useState({
    testData: [],
    userCart: [],
    sellerData: [],
    userId: ''
  });

  function addToCart(game) {
    // THIS FUNCTION WILL TAKE THE DATA BEING DISPLAYED FROM THE DATABASE, AND WILL ADD THAT GAME CHOSEN TO THE REACT STATE CART

    // we are going to push the game being added to the cart THIS WILL EVENTUALLY PULL FROM DATABASE AND PUSH INTO CART STATE
    gameState.userCart.push(game);

    // we are setting the state, so that what they add to cart will be removed from data.
    setGameState({
      ...gameState,
    });
    M.toast({ html: "Added to Cart!" });
  }

  function removeFromCart(event) {
    // ALL THIS FUNCTION WILL DO IS REMOVE THE GAME FROM THE CART STATE

    // idRemove is the id of the game we are removing
    let idRemove = event.target.dataset.tag;

    let newCart = gameState.userCart.filter((game) => game.id != idRemove);

    setGameState({
      ...gameState,
      userCart: newCart, // I want to set the cart state object as the new cart from above
    });
  }

  function purchaseCart(totalPrice) {
    // this will be the fuction that takes everything in the cart, and lets the user "buy it".

    // grabs the cart, and loops through it, deleting each game that the user just purchased
    let purchasedArray = gameState.userCart;
    purchasedArray.forEach((game) => {
      API.deleteGame(game.id).then((res) => console.log(res));
    });

    let loggedUserId = localStorage.getItem('usertoken')
    console.log(loggedUserId);

    API.removeMoney({id: loggedUserId, total: totalPrice}).then((res) => console.log(res) )

    // clears the cart of any games
    setGameState({ ...gameState, userCart: [] });
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
              component={(props) => <BuySell {...props} addCart={addToCart} />}
            />
            <Route
              exact
              path="/cart"
              component={(props) => (
                <Cart
                  {...props}
                  removeCart={removeFromCart}
                  purchaseCart={purchaseCart}
                />
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
